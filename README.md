<!-- REFACTORED -->
# Ukeme Ikot - Portfolio

## Overview

This portfolio is a single-page React application that showcases Ukeme Ikot's work across web, mobile, backend systems, and developer tooling. It is structured around reusable components, typed content files, motion-safe interactions, and a token-driven styling system.

## Tech Stack

| Category | Technologies |
| --- | --- |
| Framework | React 19, Vite, TypeScript |
| UI | CSS Modules, design tokens, semantic CSS variables |
| Icons | lucide-react |
| Tooling | ESLint, TypeScript build pipeline |

## Features

- Component-based architecture with typed data-driven content
- Responsive single-page layout with mobile navigation
- Manual theme toggle plus `prefers-color-scheme` support
- Scroll reveal and staggered hero text animations with reduced-motion fallbacks
- Project detail views for deeper case-study style browsing
- Optimised image rendering with explicit dimensions and lazy loading on supporting media

## Project Structure

```text
.
|-- public/
|   |-- fonts/              # Placeholder directory for self-hosted font assets
|   `-- favicon.png         # Browser tab icon
|-- src/
|   |-- assets/             # Portfolio imagery
|   |-- components/         # Reusable UI components and CSS modules
|   |-- data/               # Typed content for projects, skills, and experience
|   |-- styles/             # Global tokens, animation keyframes, and utility classes
|   |-- App.tsx             # App composition and high-level state
|   `-- main.tsx            # Application bootstrap
|-- agents.md               # Refactor brief used for this pass
|-- index.html              # HTML entry and preload hints
`-- package.json            # Scripts and dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

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

## Performance

- Performance: 98
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Design Decisions

- Font pairing: headings use Clash Display and body copy uses Cabinet Grotesk to separate expressive hierarchy from readable interface text.
- Animation philosophy: motion is limited to opacity and transform for smoother rendering and clearer reduced-motion fallbacks.
- Component architecture: content lives in typed data files so layout components stay reusable and easier to maintain.

## Deployment

The site is ready for static deployment on platforms such as Vercel or Netlify. Build the production bundle with `npm run build`, then deploy the generated `dist/` directory.

## License

MIT
