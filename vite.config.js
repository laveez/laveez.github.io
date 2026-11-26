import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { CARD_SIZE } from './src/components/common/enums.js';

const PDF_NAME = 'niko-muukkonen-laveez-resume.pdf';

// `npm run pdf` writes into dist/, which the dev server does not serve, so the
// Download/Print menu items would otherwise hit the SPA fallback and get index.html.
const serveGeneratedPdf = () => ({
  name: 'serve-generated-pdf',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use(`/${PDF_NAME}`, (req, res, next) => {
      const file = path.resolve(import.meta.dirname, 'dist', PDF_NAME);
      if (!fs.existsSync(file)) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${PDF_NAME} not built yet - run "npm run pdf"`);
        return next;
      }
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Length', fs.statSync(file).size);
      fs.createReadStream(file).pipe(res);
    });
  },
});

// Link previews (LinkedIn, Slack) read these from the served HTML, before any script runs.
// The image is written by `npm run card`.
const profileMeta = () => ({
  name: 'profile-meta',
  transformIndexHtml() {
    const resumePath = path.resolve(import.meta.dirname, 'data', 'resume.json');
    const { basics } = JSON.parse(fs.readFileSync(resumePath, 'utf8'));
    const description = `${basics.label}. ${basics.tagline}`;
    const named = (name, content) => ({ tag: 'meta', attrs: { name, content }, injectTo: 'head' });
    const property = (name, content) => ({ tag: 'meta', attrs: { property: name, content }, injectTo: 'head' });

    return [
      named('description', description),
      property('og:type', 'website'),
      property('og:url', basics.url),
      property('og:title', basics.name),
      property('og:description', description),
      property('og:image', new URL('card-dark.png', basics.url).href),
      property('og:image:width', String(CARD_SIZE.width)),
      property('og:image:height', String(CARD_SIZE.height)),
      named('twitter:card', 'summary_large_image'),
    ];
  },
});

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [ react(), serveGeneratedPdf(), profileMeta() ],
});
