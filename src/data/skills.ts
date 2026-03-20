// REFACTORED
import { Blocks, Cloud, Database, Smartphone } from 'lucide-react';
import type { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Production UI systems for marketing sites, dashboards, and product surfaces that need precision and speed.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    icon: Blocks,
  },
  {
    title: 'Backend',
    description: 'APIs and service layers built for reliability, observability, and clean contracts between teams.',
    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'PostgreSQL'],
    icon: Database,
  },
  {
    title: 'Mobile',
    description: 'Native-feeling mobile products with strong offline behavior, stable state, and careful performance work.',
    items: ['React Native', 'Expo', 'Android SDK', 'Native Modules', 'Offline-first UX'],
    icon: Smartphone,
  },
  {
    title: 'Tooling & Infra',
    description: 'Delivery pipelines and developer tooling that reduce friction from local setup to release automation.',
    items: ['CI/CD', 'GitHub Actions', 'Docker', 'Redis', 'NPM Packages'],
    icon: Cloud,
  },
];
