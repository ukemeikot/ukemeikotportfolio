// REFACTORED
import ukemeImg from '../assets/ukeme.jpg';
import type { AboutContent, HeroContent, NavItem, SocialLink } from './types';

export const portrait = {
  src: ukemeImg,
  alt: 'Portrait of Ukeme Ikot',
  width: 747,
  height: 1024,
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ukeme-ikot' },
  { label: 'GitHub', href: 'https://github.com/ukemeikot' },
  { label: 'X', href: 'https://x.com/UkemeEtim7' },
];

export const heroContent: HeroContent = {
  eyebrow: 'Mobile + Full-Stack Engineer',
  headline: [
    'Ukeme Ikot',
    'builds high-',
    'performance',
    'mobile products',
    'and frontend',
    'systems.',
  ],
  summary:
    'I build React Native products, polished frontend experiences, and backend systems for teams shipping real software. Recent work spans healthcare dashboards, childcare SaaS, crypto wallet flows, authentication SDKs, and realtime communication platforms built with React, Next.js, TypeScript, Node.js, and mobile-first product thinking.',
  focus:
    'Current focus: React Native performance optimization, frontend systems in React, vanilla js and Next.js, mobile product architecture, and developer tooling that helps teams ship faster.',
  imageAlt: 'Portrait of Ukeme Ikot',
};

export const aboutContent: AboutContent = {
  eyebrow: 'About',
  title: 'Engineering across product, platform, and mobile delivery.',
  body: [
    'I work across frontend, backend, and mobile engineering, with strong hands-on experience in React, Next.js, TypeScript, Tailwind CSS, React Native, and Expo.',
    'My recent work includes React Native apps, Next.js dashboards, realtime backends, and production SDKs, from healthcare coordination platforms and childcare products to crypto wallet onboarding and authentication tooling.',
    'I care about frontend quality, mobile performance, clean architecture, and developer workflows that make software easier to ship, debug, and extend.',
  ],
  facts: [
    { label: 'Primary Stack', value: 'React, Next.js, React Native, TypeScript, Node.js' },
    { label: 'Delivery Style', value: 'Frontend, mobile, platform engineering, and technical execution' },
    { label: 'Location', value: 'Nigeria' },
  ],
};

export const contactContent = {
  eyebrow: 'Contact',
  title: 'Building something ambitious?',
  body:
    'If you need a senior engineer who can move from interface detail to backend architecture without losing quality, let’s talk.',
  email: 'ukemeetim2222@gmail.com',
};
