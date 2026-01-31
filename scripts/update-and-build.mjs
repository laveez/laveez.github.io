import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, 'dist');
const PDF_NAME = 'niko-muukkonen-laveez-resume.pdf';
const PDF_IN_DIST = path.join(DIST_DIR, PDF_NAME);
const PDF_IN_ROOT = path.join(ROOT, PDF_NAME);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const run = (cmd, args, { env = process.env, inheritStdio = true } = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd: ROOT,
      env,
      stdio: inheritStdio ? 'inherit' : 'pipe',
      shell: false,
    });

    child.on('error', reject);

    child.on('close', (code, signal) => {
      if (code === 0) return resolve({ code, signal });
      reject(new Error(`${cmd} ${args.join(' ')} failed (code=${code}, signal=${signal ?? 'none'})`));
    });
  });

const exists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const waitForPdf = async ({ timeoutMs = 120_000 } = {}) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await exists(PDF_IN_DIST)) return;
    await sleep(500);
  }
  throw new Error(`Timed out waiting for PDF at ${PDF_IN_DIST}`);
};

const main = async () => {
  // 1) ncu
  await run('npx', ['--yes', 'npm-check-updates']);

  // 2) ncu -u
  await run('npx', ['--yes', 'npm-check-updates', '-u']);

  // 3) npm install
  await run('npm', ['install']);

  // 4) npm run dev (background)
  const dev = spawn('npm', ['run', 'dev'], {
    cwd: ROOT,
    env: process.env,
    stdio: 'inherit',
    shell: false,
  });

  const stopDev = async () => {
    if (dev.exitCode != null) return;

    // Try gentle first
    dev.kill('SIGINT');
    for (let i = 0; i < 20; i++) {
      if (dev.exitCode != null) return;
      await sleep(250);
    }

    // Then force
    dev.kill('SIGKILL');
  };

  const cleanup = async () => {
    try {
      await stopDev();
    } catch {
      // ignore
    }
  };

  process.on('SIGINT', () => {
    void cleanup().finally(() => process.exit(130));
  });
  process.on('SIGTERM', () => {
    void cleanup().finally(() => process.exit(143));
  });

  try {
    // Give Vite a moment to start listening. (pdf.js also waits for networkidle0)
    await sleep(1500);

    // 5) npm run PDF (while dev is running)
    await run('npm', ['run', 'pdf']);

    // Ensure the PDF is actually written before we proceed.
    await waitForPdf();

    // 6) stop npm run dev
    await stopDev();

    // 7) cp PDF from dist to root
    await fs.mkdir(ROOT, { recursive: true });
    await fs.copyFile(PDF_IN_DIST, PDF_IN_ROOT);

    // 8) npm run build
    await run('npm', ['run', 'build']);

    // 9) cp PDF from root back to dist
    await fs.mkdir(DIST_DIR, { recursive: true });
    await fs.copyFile(PDF_IN_ROOT, PDF_IN_DIST);

    // 10) npm run preview, stays running until you exit.
    console.log('\nStarting preview server…\n');
    console.log("\nApp is soon testable. You can exit when you're done (Ctrl+C).\n");
    await run('npm', ['run', 'preview']);
  } finally {
    await cleanup();
  }
};

await main();
