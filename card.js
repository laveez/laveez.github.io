import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { CARD_SIZE } from './src/components/common/enums.js';

const url = process.env.URL || 'http://localhost:5173/card';
const distDir = path.join(import.meta.dirname, 'dist');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ ...CARD_SIZE, deviceScaleFactor: 1 });
await fs.mkdir(distDir, { recursive: true });

for (const theme of [ 'dark', 'light' ]) {
  await page.goto(`${url}?theme=${theme}`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);

  const cardPath = path.join(distDir, `card-${theme}.png`);
  await page.screenshot({ path: cardPath, clip: { x: 0, y: 0, ...CARD_SIZE } });
  console.log(`Card saved to ${cardPath}`);
}

await browser.close();
