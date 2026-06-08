// REFACTORED
export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroContent {
  role: string;
  headline: string[];
  goalLead: string;
  goalEmphasis: string;
  goalTrail: string;
}

export interface AboutContent {
  eyebrow: string;
  greetingLead: string;
  greetingEmphasis: string;
  greetingTrail: string;
  experienceLead: string;
  experienceEmphasis: string;
  experienceTrail: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ExperienceEntry {
  period: string;
  duration: string;
  company: string;
  role: string;
  stack: string;
  url?: string;
}

export interface ArticleEntry {
  title: string;
  excerpt: string;
  url: string;
  readTime?: string;
  tag?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ProjectCategory = 'frontend-mobile' | 'backend' | 'devops';

export interface ProjectEntry {
  slug: string;
  title: string;
  type: string;
  categories: ProjectCategory[];
  summary: string;
  challenge: string;
  stackLine: string;
  impact: string;
  details: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  images?: ProjectImage[];
  isMira?: boolean;
}

export interface ProjectFilter {
  id: 'all' | ProjectCategory;
  label: string;
}
