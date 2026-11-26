import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { CARD_SIZE } from './src/components/common/cardSize.js';

const cardUrl = process.env.CARD_URL || 'http://localhost:5173/profile-card';
const distDir = path.join(import.meta.dirname, 'dist');

const browser = await puppeteer.launch();

try {
  const page = await browser.newPage();
  await page.setViewport({ ...CARD_SIZE, deviceScaleFactor: 1 });
  await fs.mkdir(distDir, { recursive: true });

  for (const theme of [ 'dark', 'light' ]) {
    const url = new URL(cardUrl);
    url.searchParams.set('theme', theme);
    await page.goto(url.href, { waitUntil: 'networkidle0' });
    // Fails the run when anything but the card came back: an error page, another route, a script file
    await page.waitForSelector('[data-profile-card]', { timeout: 10_000 });
    await page.evaluate(() => document.fonts.ready);

    const cardPath = path.join(distDir, `card-${theme}.png`);
    await page.screenshot({ path: cardPath, clip: { x: 0, y: 0, ...CARD_SIZE } });
    console.log(`Card saved to ${cardPath}`);
  }
} finally {
  await browser.close();
}
