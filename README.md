<div align="center">

# laveez.github.io

**Personal website & resume**

React + Material-UI resume with animated sections, dark/light theme, and automated PDF generation.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Node.js 20+](https://img.shields.io/badge/Node.js-20%2B-brightgreen?style=flat-square)](https://nodejs.org)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square)](https://react.dev)
[![MUI 7](https://img.shields.io/badge/MUI-7-007FFF?style=flat-square)](https://mui.com)

</div>

---

### Contents

[Features](#features) · [Quick Start](#quick-start) · [Scripts](#scripts) · [How It Works](#how-it-works)

---

## Features

- **Responsive design** — dark/light theme toggle, custom mobile layout
- **Animated sections** — Framer Motion entrance animations and hover effects
- **Dynamic data** — resume content driven by a single JSON file
- **PDF generation** — Puppeteer renders a print-optimized view to PDF
- **CI/CD** — GitHub Actions lint, build, and deploy to GitHub Pages

## Quick Start

```bash
git clone https://github.com/laveez/laveez.github.io.git
cd laveez.github.io
npm install
npm run dev
```

Opens at [localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build (copies 404.html for SPA routing) |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run pdf` | Generate resume PDF via Puppeteer |
| `npm run pdf:cover` | Generate cover-page PDF |
| `npm run preview` | Preview production build |

## How It Works

Resume data lives in `data/resume.json` (modified JSON Resume schema). The React app reads this file and renders each section — basics, experience, skills, projects, etc. — as Material-UI components wrapped in Framer Motion animations.

A dedicated print view strips animations and applies a clean layout. Puppeteer navigates to the print route, waits for render, and saves the output as a downloadable PDF. Print CSS overrides ensure correct rendering regardless of animation state.

GitHub Actions deploys on push to main: lint, build, generate PDF, and publish to GitHub Pages.

## License

[MIT](LICENSE)
