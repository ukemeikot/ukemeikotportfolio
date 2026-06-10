# AGENTS.md — working in this repo

Guidance for AI agents (and humans) contributing to Ukeme Ikot's portfolio. Read this before editing.

## What this is

A Vite + React 19 + TypeScript single-page portfolio with a monochrome, monospace-led design. Content is data-driven; components are presentational. There is no backend — it is a static site.

## Commands

```bash
npm install        # install
npm run dev        # local dev server
npm run build      # tsc -b && vite build (must pass before committing)
npm run lint       # eslint
```

Always run `npm run build` after changes — it type-checks and bundles. The repo uses `noUnusedLocals`, so remove unused imports/vars.

## Architecture & conventions

- **Data-driven content.** Prefer editing `src/data/*` over components. Components render whatever the typed data provides.
  - `projects.ts` — projects and their `caseStudy` blocks
  - `skills.ts`, `experience.ts`, `articles.ts`, `quotes.ts`
  - `siteContent.ts` — hero, about, nav items, socials, contact
  - `types.ts` — shared content types (update here first when adding fields)
- **Styling = CSS Modules + tokens.** Each component owns a `ComponentName.module.css`. All colours/spacing/radii/transitions are CSS variables defined in `src/styles/globals.css`. Never hardcode colours or add inline `style` props (except dynamically computed values). Do not introduce a CSS framework.
- **Design system.** Monochrome only. Fonts: `--font-display`/`--font-mono` = Space Mono, `--font-body` = Space Grotesk. The whole site sits in a single rounded `.site-card`; page and card share one background colour. Navbar is sticky.
- **Motion is safe.** Animate `transform`/`opacity` only, and always provide a `@media (prefers-reduced-motion: reduce)` fallback.
- **Performance.** Heavy sections are `React.lazy` + `Suspense` in `App.tsx`; memoize where it helps; lazy-load below-the-fold images.
- **Diagrams are inline SVG.** Architecture diagrams live in `components/CaseStudyDiagram` and are selected by a string `diagram` id on a project's `caseStudy`. No charting libraries.

## How to: add a project

Add an entry to `src/data/projects.ts` (`ProjectEntry`). Key fields: `slug`, `title`, `type`, `categories` (`'frontend-mobile' | 'backend' | 'devops'`, may be multiple), `summary`, `tech`, optional `liveUrl`/`repoUrl`, and an optional rich `caseStudy`.

A `caseStudy` supports: `intro`, `problem`, `architecture`, `diagram` (id), `modules[]`, `sections[]`, `contributions[]` (grouped "what I built"), `challenge`, and `links[]`. All are rendered by `components/ProjectDetail`.

To feature a project near the top of the grid, add its `slug` to `FEATURED_ORDER` in `components/ProjectGrid/index.tsx`. To give it a short label in the constellation, add it to `SHORT` in `components/TechConstellation/index.tsx`.

## How to: add a case-study diagram

Add a new `<NameDiagram />` and a `if (id === '<name>')` branch in `components/CaseStudyDiagram/index.tsx` (reuse the `Box`/`Edge` helpers and a `cs-arrow` marker), then set `caseStudy.diagram = '<name>'` on the project.

## Content accuracy rules

- This is a real person's portfolio. **Do not invent facts, metrics, employers, or contributions.** When asked to describe project work, study the actual repo/commits first and write only what is supported; flag uncertainty to the user rather than guessing.
- Keep real links accurate; do not point "Source" at a generic profile when no repo exists.

## Git

- Commits are authored solely by the repo owner. **Do not add `Co-Authored-By` / agent trailers.**
- Default branch is `main`. Build must pass before pushing.

## House style

- Leave a `// REFACTORED` comment marker at the top of files that follow the refactored conventions (existing pattern).
- Match the surrounding code: small typed components, content out of components, modules for styles.
- Prefer the more maintainable, more accessible choice when ambiguous.
