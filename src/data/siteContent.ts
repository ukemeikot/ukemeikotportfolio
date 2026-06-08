// REFACTORED
import type { AboutContent, HeroContent, NavItem, SocialLink } from './types';

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contacts' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/ukemeikot' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ukeme-ikot' },
  { label: 'Twitter', href: 'https://x.com/UkemeEtim7' },
  { label: 'Email', href: 'mailto:ukemeetim2222@gmail.com' },
];

export const heroContent: HeroContent = {
  role: 'Full-Stack Developer',
  headline: ['Full-Stack', 'Developer'],
  goalLead: 'My goal is to ',
  goalEmphasis: 'write maintainable, clean and understandable code',
  goalTrail: ' so that development stays enjoyable and software is built to last.',
};

export const aboutContent: AboutContent = {
  eyebrow: '... /About me ...',
  greetingLead: "Hello! I'm Ukeme, I'm a ",
  greetingEmphasis: 'full-stack developer',
  greetingTrail: '.',
  experienceLead: 'I ship real products across ',
  experienceEmphasis: 'frontend, backend, and DevOps',
  experienceTrail: ' — from mobile apps and dashboards to APIs and deployment pipelines.',
};

export const contactContent = {
  eyebrow: '... /Contacts ...',
  title: 'Building something ambitious?',
  body:
    'If you need an engineer who can move from interface detail to backend architecture and deployment without losing quality, let’s talk.',
  email: 'ukemeetim2222@gmail.com',
};
