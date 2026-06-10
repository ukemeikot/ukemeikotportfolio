# Ukeme Ikot — Portfolio

A single-page React portfolio showcasing full-stack work across frontend, mobile, backend, and DevOps. It uses a monochrome, monospace-led design (inspired by developer/terminal aesthetics), with data-driven content and rich, blog-style project case studies.

Live (project work referenced inside): [fitcall.me](https://fitcall.me) · [api.hng.credianlab.xyz](https://api.hng.credianlab.xyz/index.html)

## Tech Stack

| Category | Technologies |
| --- | --- |
| Framework | React 19, Vite 7, TypeScript |
| Styling | CSS Modules + design tokens (semantic CSS variables) |
| Fonts | Space Mono (display/mono) + Space Grotesk (body), via Google Fonts |
| Icons | lucide-react |
| Diagrams | Hand-built inline SVG (no chart deps) |
| Tooling | ESLint, TypeScript build pipeline |

## Features

- **Monochrome design system** — one black/white palette with light + dark themes, driven entirely by CSS variables in `globals.css`.
- **Sticky navbar** with a profile avatar, condensing on scroll.
- **Hero** with staggered monospace headline animation and a Projects CTA.
- **Autoplaying quote carousel** of famous engineering quotes (respects reduced motion).
- **Skills** as slash-separated category cards.
- **Projects**:
  - An interactive **Tech Constellation** — an SVG node map linking projects to shared technologies; hover/click to light up connections.
  - A **filterable grid** (All / Frontend & Mobile / Backend / DevOps); whole cards are clickable.
  - **Detail pages** with blog-style case studies: intro, problem, architecture, **SVG architecture diagrams**, modules, "what I built" contributions, narrative sections, technical challenge, and links.
- **Articles** — real Medium posts in a responsive 3-column grid.
- **Work** — an experience table with a linked employer.
- **Contact** — a Formspree-ready contact form.
- Motion-safe throughout (`prefers-reduced-motion` fallbacks), lazy-loaded sections, and memoized components.

## Project Structure

```text
.
|-- public/
|   `-- favicon.png            # Browser tab icon
|-- src/
|   |-- assets/                # Portfolio imagery
|   |-- components/            # UI components, each with its own .module.css
|   |   |-- Navbar/  Hero/  About/  Skills/  Quotes/
|   |   |-- ProjectGrid/  ProjectCard/  ProjectDetail/  TechConstellation/
|   |   |-- CaseStudyDiagram/  Articles/  ExperienceTimeline/  Footer/
|   |   `-- SectionWrapper/  AnimatedText/  ScrollReveal/
|   |-- data/                  # Typed, data-driven content
|   |   |-- projects.ts        # Projects + rich case studies
|   |   |-- skills.ts  experience.ts  articles.ts  quotes.ts
|   |   |-- siteContent.ts     # Hero, About, nav, socials, contact
|   |   `-- types.ts           # Shared content types
|   |-- styles/                # globals.css (tokens), animations.css, utils.css
|   |-- App.tsx                # Composition, theme + project-detail state
|   `-- main.tsx               # Bootstrap
|-- agents.md                  # Guide for AI agents working in this repo
|-- index.html                 # HTML entry, font + preload hints
`-- package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Running locally

```bash
npm run dev
```

### Building for production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Editing content

Almost everything is data-driven — edit the typed files in `src/data/` rather than the components:

- **Projects & case studies** → `src/data/projects.ts` (a project may carry a `caseStudy` with an optional `diagram` id rendered by `CaseStudyDiagram`).
- **Skills** → `src/data/skills.ts` · **Work** → `src/data/experience.ts`
- **Articles** → `src/data/articles.ts` · **Quotes** → `src/data/quotes.ts`
- **Hero / About / nav / socials / contact** → `src/data/siteContent.ts`

## Design Decisions

- **Monochrome + monospace** — Space Mono for headings, labels, and code; Space Grotesk for body. A single neutral palette keeps the focus on the work and reads as a developer-tool aesthetic.
- **Token-driven theming** — every colour, space, radius, and transition is a CSS variable, so light/dark and future re-skins are one place to change.
- **Custom SVG diagrams** — architecture diagrams are hand-built inline SVG (scalable, theme-aware, zero chart dependencies).
- **Animation philosophy** — transform/opacity only, with `prefers-reduced-motion` fallbacks everywhere.
- **Data-driven content** — layout components stay reusable; content lives in typed `src/data` files.

## Deployment

Static build, ready for Vercel or Netlify. Run `npm run build` and deploy the generated `dist/` directory. To enable the contact form, set `VITE_FORMSPREE_ENDPOINT` in the environment.

## License

MIT
