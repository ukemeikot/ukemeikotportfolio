// REFACTORED
import type { ExperienceEntry } from './types';

export const experience: ExperienceEntry[] = [
  {
    eyebrow: 'Health Platform Delivery',
    title: 'Engineered realtime care coordination systems',
    period: 'Recent Work',
    summary:
      'Architected connected web and mobile surfaces for healthcare teams working with live patient data, prioritised alerts, and security-sensitive workflows.',
    highlights: [
      'Engineered realtime sync for dashboards, notifications, and shared care coordination flows.',
      'Integrated risk scoring workflows and data visualisation for early intervention decisions.',
      'Designed for offline access, role-based permissions, and compliance-heavy environments.',
    ],
  },
  {
    eyebrow: 'Product Engineering',
    title: 'Shipped full-stack applications across web and mobile',
    period: 'Recent Work',
    summary:
      'Delivered SaaS and consumer products that required consistent state, resilient API design, and sharp UX across browsers and mobile devices.',
    highlights: [
      'Led app architecture across Next.js dashboards, React Native clients, and supporting backend services.',
      'Optimised data flows for realtime updates, caching, and stable user experience in low-connectivity conditions.',
      'Balanced fast iteration with maintainable code structure and clear technical documentation.',
    ],
  },
  {
    eyebrow: 'SDKs & Developer Tools',
    title: 'Built tools that reduce integration complexity',
    period: 'Recent Work',
    summary:
      'Created typed SDK workflows and automation paths that improved developer onboarding, release consistency, and authentication implementation.',
    highlights: [
      'Published reusable TypeScript packages with clear API design and structured error handling.',
      'Automated release flows with CI/CD to keep package quality and delivery repeatable.',
      'Focused on developer experience, documentation, and interfaces that scale with future feature growth.',
    ],
  },
];
