# Muhammad Umar Hassan — Portfolio

## Run Locally

### Requirements
- Node.js 18+ (https://nodejs.org)
- npm or pnpm

### Steps

```bash
# 1. Install dependencies
npm install
# or
pnpm install

# 2. Start development server
npm run dev
# or
pnpm dev
```

Then open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

Output goes to the `dist/` folder — you can deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## What was changed from the Replit version

- Removed `@replit/vite-plugin-runtime-error-modal`, `cartographer`, and `dev-banner` plugins
- Removed the `PORT` / `BASE_PATH` env-var requirements (defaults to port 5173 and base `/`)
- Removed the `@workspace/api-client-react` monorepo workspace package
- Replaced the monorepo-relative `tsconfig.json` with a self-contained one
