import fs from 'node:fs/promises';
import path, { dirname } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line no-undef
const url = process.env.URL || 'http://localhost:5173/print';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });

  const distDir = path.join(__dirname, 'dist');
  await fs.mkdir(distDir, { recursive: true });

  const pdfPath = path.join(distDir, 'niko-muukkonen-laveez-resume.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    scale: 0.45,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`PDF saved to ${pdfPath}`);
})();
