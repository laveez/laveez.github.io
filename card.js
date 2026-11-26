import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { BANNER_SIZE, CARD_SIZE } from './src/components/common/cardSize.js';

const cardUrl = process.env.CARD_URL || 'http://localhost:5173/profile-card';
const distDir = path.join(import.meta.dirname, 'dist');
const shapes = [
  { name: 'card', size: CARD_SIZE },
  { name: 'banner', size: BANNER_SIZE },
];

const browser = await puppeteer.launch();

try {
  const page = await browser.newPage();
  await fs.mkdir(distDir, { recursive: true });

  for (const { name, size } of shapes) {
    await page.setViewport({ ...size, deviceScaleFactor: 1 });

    for (const theme of [ 'dark', 'light' ]) {
      const url = new URL(cardUrl);
      url.searchParams.set('shape', name);
      url.searchParams.set('theme', theme);
      await page.goto(url.href, { waitUntil: 'networkidle0' });
      // Fails the run when anything but the card came back: an error page, another route, a script file
      await page.waitForSelector('[data-profile-card]', { timeout: 10_000 });
      await page.evaluate(() => document.fonts.ready);

      const imagePath = path.join(distDir, `${name}-${theme}.png`);
      await page.screenshot({ path: imagePath, clip: { x: 0, y: 0, ...size } });
      console.log(`Image saved to ${imagePath}`);
    }
  }
} finally {
  await browser.close();
}
