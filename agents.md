Here's a comprehensive prompt you can paste directly into Codex:

---

**CODEX PROMPT — Portfolio Website Refactor**

````
You are an expert frontend engineer performing a full refactor of my portfolio website codebase. Follow every instruction below precisely and completely.

---

## OBJECTIVES

1. Componentize the codebase
2. Standardize styling and architecture
3. Optimize for performance
4. Audit and rewrite all copy
5. Improve animations
6. Update typography to Clash Display + Grotesk pairing
7. Write a professional README

---

## 1. COMPONENT ARCHITECTURE

- Audit every file and extract repeated or logical UI blocks into standalone, reusable components
- Each component should live in `/components` with its own folder: `/components/ComponentName/index.tsx` + `ComponentName.module.css` (or `.styled.ts` if using styled-components)
- Components to create at minimum (add more as needed):
  - `Navbar`
  - `Hero`
  - `About`
  - `ProjectCard`
  - `ProjectGrid`
  - `SkillBadge`
  - `ExperienceItem`
  - `Footer`
  - `SectionWrapper` (shared layout wrapper with consistent padding/max-width)
  - `AnimatedText` (for headline entrance animations)
  - `ScrollReveal` (reusable scroll-triggered wrapper)
- All components must be typed with TypeScript interfaces/props
- No logic or data should be hardcoded inside components — pass everything via props or pull from a `/data` or `/content` config file

---

## 2. STYLING STANDARDS

- Use CSS custom properties (design tokens) defined in a global `:root` for all colors, spacing, font sizes, radii, and transitions
- Follow a consistent spacing scale: 4px base unit (4, 8, 12, 16, 24, 32, 48, 64, 96px)
- All colors must use semantic naming: `--color-bg`, `--color-surface`, `--color-text-primary`, `--color-text-muted`, `--color-accent`, `--color-accent-hover`
- Implement dark mode via `prefers-color-scheme` and a manual toggle, both using the same CSS variable system
- Responsive breakpoints: mobile-first. Breakpoints at 480px, 768px, 1024px, 1280px
- Remove all inline styles. No style props on JSX elements unless dynamically computed
- Standardize all section layouts using the `SectionWrapper` component

---

## 3. TYPOGRAPHY — CLASH DISPLAY + CABINET GROTESK

- Install and configure:
  - **Clash Display** — used for all headings (H1–H3), hero text, project titles, and section headers
  - **Cabinet Grotesk** — used for all body copy, nav items, labels, captions, and UI text
- Define in global CSS:

  ```css
  --font-display: 'Clash Display', sans-serif;
  --font-body: 'Cabinet Grotesk', sans-serif;
````

- Typography scale:
  - Hero H1: clamp(48px, 7vw, 96px), Clash Display, weight 700
  - H2 section headers: clamp(32px, 4vw, 56px), Clash Display, weight 600
  - H3 card/item titles: clamp(20px, 2.5vw, 28px), Clash Display, weight 500
  - Body: clamp(15px, 1.2vw, 17px), Cabinet Grotesk, weight 400
  - Labels/captions: 13px, Cabinet Grotesk, weight 500, letter-spacing 0.08em, uppercase
- Remove all system font fallbacks from heading elements

---

## 4. ANIMATIONS

Refactor all animations to follow these principles — smooth, purposeful, performance-safe:

- Use `will-change: transform, opacity` only on actively animating elements
- All animations must use `transform` and `opacity` only (no animating `height`, `width`, `top`, `left`, `margin`)
- Respect `prefers-reduced-motion` — wrap all animations with a media query check and provide instant/no-transition fallback

### Specific animations to implement:

- **Hero text**: Staggered word or line reveal using `opacity: 0 → 1` + `translateY(24px → 0)`, 0.6s ease-out, 80ms stagger between words
- **Scroll reveal**: All sections and cards fade + slide up (`translateY(32px → 0)`, opacity 0→1) when entering viewport using IntersectionObserver inside the `ScrollReveal` component
- **Navbar**: On scroll down — slim and add `backdrop-filter: blur(12px)` + subtle border-bottom. On scroll up — restore full height
- **Project cards**: On hover — subtle `translateY(-4px)` lift + `box-shadow` deepens. Transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Cursor (optional)**: Custom cursor dot that follows mouse with lerp smoothing (if not already present)
- **Page transitions**: Fade-out/fade-in between route changes (100ms out, 200ms in)
- **Skill badges**: Staggered pop-in on scroll enter using `scale(0.85 → 1)` + opacity

Use Framer Motion if the project already uses React. If vanilla JS — use a single `animations.js` utility with IntersectionObserver + CSS class toggling.

---

## 5. COPY AUDIT — REWRITE ALL TEXT

Rewrite every piece of copy on the site to reflect a senior engineer with strong command of frontend, backend, and mobile development. Tone: confident, precise, no fluff. Use active voice. Avoid clichés like "passionate", "rockstar", "ninja", "love to code".

### Hero Section

- Headline should communicate full-stack + mobile capability immediately
- Example pattern (rewrite in my voice): "[Name] — Engineer building high-performance web and mobile products, from pixel-perfect interfaces to scalable backend systems."
- Subheadline: 1–2 sentences on what I specialise in and the kind of problems I solve

### About Section

- Rewrite to emphasise: technical depth across the stack, mobile (iOS/Android/React Native), production experience, engineering craft
- Should feel like a senior engineer wrote it, not a bootcamp grad
- 3–4 tight sentences max

### Skills / Tech Stack Section

- Organise into clear categories:
  - **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, etc.
  - **Backend**: Node.js, Express, PostgreSQL, REST APIs, GraphQL, etc.
  - **Mobile**: React Native, Expo, etc.
  - **Tooling & Infra**: Git, CI/CD, Vercel, Docker, etc.
- Each category should have a short one-liner descriptor, not just a list of logos

### Project Descriptions

For each project card, rewrite the description to follow this structure:

1. **What it is** — one sentence
2. **Technical challenge** — what was hard or interesting to build
3. **Stack** — listed inline
4. **Impact/outcome** — metrics, users, or result if available

### Experience / Timeline Section

- Rewrite each role using action verbs: Architected, Engineered, Shipped, Led, Optimised, Integrated
- Lead with impact, follow with method

---

## 6. PERFORMANCE OPTIMISATIONS

- Audit and fix all of the following:
  - Lazy load all images using `loading="lazy"` + convert to `.webp` where possible
  - Add `width` and `height` attributes to all `<img>` tags to prevent layout shift
  - Code-split route-level components using dynamic imports (`React.lazy` / `next/dynamic`)
  - Remove all unused CSS and unused JS imports
  - Move all Google Fonts or custom fonts to self-hosted with `font-display: swap`
  - Add `rel="preload"` for above-the-fold fonts and hero images
  - Ensure no render-blocking scripts — all third-party scripts use `defer` or `async`
  - Memoize expensive components with `React.memo` where appropriate
  - Use `useCallback` and `useMemo` where dependencies are stable and computation is non-trivial

---

## 7. FILE & FOLDER STRUCTURE

Enforce this structure (adjust for Next.js / Vite / CRA as appropriate):

```
/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── ProjectCard/
│   ├── ProjectGrid/
│   ├── SkillBadge/
│   ├── ExperienceItem/
│   ├── Footer/
│   ├── SectionWrapper/
│   ├── AnimatedText/
│   └── ScrollReveal/
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── styles/
│   ├── globals.css       ← design tokens, resets, typography
│   ├── animations.css    ← keyframes and animation utilities
│   └── utils.css         ← helper classes
├── public/
│   └── fonts/            ← self-hosted Clash Display + Cabinet Grotesk
├── pages/ or app/        ← route files only, no inline logic
└── README.md
```

---

## 8. README

Generate a complete `README.md` with the following sections:

```md
# [Your Name] — Portfolio

## Overview

Brief description of what this is and what it showcases.

## Tech Stack

Table listing: Category | Technologies

## Features

- List of key features (animations, dark mode, responsive, etc.)

## Project Structure

Folder tree with one-line descriptions of each directory

## Getting Started

### Prerequisites

### Installation

### Running locally

### Building for production

## Performance

Lighthouse scores (add placeholders: Performance 98, Accessibility 100, Best Practices 100, SEO 100)

## Design Decisions

Short notes on: font pairing rationale, animation philosophy, component architecture decisions

## Deployment

How and where it's deployed (Vercel / Netlify etc.)

## License

MIT
```

---

## RULES

- Do not remove any existing projects, experience entries, or real personal data
- Preserve all existing routes and page structure
- Do not introduce new dependencies without a clear reason — prefer native browser APIs where possible
- Every file you touch must be left cleaner than you found it
- Leave a `// REFACTORED` comment at the top of every file you modify
- If anything is ambiguous, make the more performant and maintainable choice

```

---

**Tips for using this in Codex:**
- Run it against your full repo by attaching the codebase before submitting
- If Codex has a file limit, prioritise sending: `pages/` or `app/`, `components/`, `styles/`, and `public/` folders first
- After the first pass, follow up with: *"Now audit the copy specifically and rewrite it assuming I have 3+ years of fullstack and mobile experience"*
```
