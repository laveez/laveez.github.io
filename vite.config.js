import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [ react(), serveGeneratedPdf() ],
});
