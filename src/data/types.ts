// REFACTORED
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string[];
  summary: string;
  focus: string;
  imageAlt: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  body: string[];
  facts: Array<{
    label: string;
    value: string;
  }>;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export interface ExperienceEntry {
  eyebrow: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  type: string;
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
