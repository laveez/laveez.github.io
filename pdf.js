import path, { dirname } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/print', { waitUntil: 'networkidle0' });

  const pdfPath = path.join(__dirname, 'public', 'niko-muukkonen-laveez-resume.pdf');
  await page.pdf({ path: pdfPath, format: 'A4', scale: 0.4 });

  await browser.close();
  console.log(`PDF saved to ${pdfPath}`);
})();
