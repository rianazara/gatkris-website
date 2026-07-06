# Personal Website — Gayatri Gopalakrishnan

A pixel-faithful, hand-built recreation of [gatkris.framer.website](https://gatkris.framer.website/)
(originally a customized "Unti — Resume & Portfolio Template" on Framer), rebuilt as a
self-contained **React + Vite** app so it can be hosted anywhere — including GitHub Pages.

All fonts, images, and the resume PDF are bundled locally, so the site has **no runtime
dependency on Framer's CDN**.

## Tech stack

- **React 18** + **Vite 6**
- Plain **CSS** (custom properties for theming — no UI framework)
- Self-hosted **Geist** + **Inter** fonts (woff2)

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
public/
  img/            avatar, project photos, company logos
  favicon-*.png   light/dark favicons
  resume.pdf      downloadable resume
src/
  data/content.js   ← all text/content lives here (edit this to update the site)
  components/        TopBar, Clock, ThemeToggle, Hero, About, Projects, Experience, Footer, icons
  styles/
    fonts.css        @font-face (self-hosted Geist + Inter)
    theme.css        color tokens (light + dark) + reset
    app.css          layout + component styles
  assets/fonts/      bundled woff2 files
```

## Theming

The light/dark palette is defined as CSS custom properties in `src/styles/theme.css`,
taken 1:1 from the original site's design tokens. Theme selection:

1. Follows the OS setting via `prefers-color-scheme` by default.
2. Can be toggled manually with the navbar sun/moon button (persisted in `localStorage`).
3. Can be forced for testing with a `?theme=light` or `?theme=dark` URL parameter.

## Editing content

Everything user-visible (name, title, about text, projects, experience, contacts) is in
**`src/data/content.js`**. Update that file to change the site — no component edits needed.

> **Note — faithful-clone quirks carried over from the live site:** the project tiles
> (Club Rova, Sorne, Azra, Okars) and most Experience descriptions/locations are the Framer
> template's placeholder content. The footer e-mail label shows `gayatrigopu@gmai.com`
> (missing an "l") — a typo from the live site; the underlying mailto link uses the correct
> address. The footer LinkedIn link points to `linkedin.com` (as on the live site). Fix any
> of these in `src/data/content.js` whenever you like.

## Deploying to GitHub Pages

The build is deploy-ready. Choose the correct `base`:

- **User/organization site** (`<user>.github.io`): `base` stays `/` — nothing to do.
- **Project site** (`<user>.github.io/<repo>/`): build with the repo subpath:

  ```bash
  VITE_BASE=/<repo>/ npm run build
  ```

  (All asset URLs already respect `import.meta.env.BASE_URL`, so they resolve correctly
  under a subpath.)

### Option A — GitHub Actions (recommended)

A workflow is included at `.github/workflows/deploy.yml`. To use it:

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. If this is a **project** site, set the `VITE_BASE` value in the workflow to `/<repo>/`.
4. Push to `main` — the workflow builds and deploys automatically.

### Option B — manual

```bash
VITE_BASE=/<repo>/ npm run build      # omit VITE_BASE for a user/org site
npx gh-pages -d dist                  # publishes dist/ to the gh-pages branch
```

Then set **Settings → Pages → Source: Deploy from a branch → `gh-pages`**.
