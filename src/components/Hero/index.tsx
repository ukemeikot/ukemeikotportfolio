// REFACTORED
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { HeroContent, SocialLink } from '../../data/types';
import AnimatedText from '../AnimatedText';
import ScrollReveal from '../ScrollReveal';
import styles from './Hero.module.css';

interface HeroProps {
  content: HeroContent;
  socials: SocialLink[];
  onNavigate: (id: string) => void;
}

const socialIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

const Hero = ({ content, socials, onNavigate }: HeroProps) => (
  <section id="home" className={styles.hero}>
    <div className={styles.inner}>
      <div className={styles.headRow}>
        <h1 className={styles.title}>
          <AnimatedText lines={content.headline} />
        </h1>
        <button
          type="button"
          className={styles.projectsBtn}
          onClick={() => onNavigate('projects')}
        >
          <span>Projects</span>
          <span className={styles.projectsBtnIcon} aria-hidden="true">
            <ArrowRight size={16} />
          </span>
        </button>
      </div>

      <ScrollReveal delay={140}>
        <p className={styles.goal}>
          {content.goalLead}
          <em className={styles.goalEmphasis}>{content.goalEmphasis}</em>
          {content.goalTrail}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={240}>
        <div className={styles.socials}>
          {socials.map((social) => {
            const Icon = socialIcons[social.label] ?? ArrowUpRight;
            const isMail = social.href.startsWith('mailto:');
            return (
              <a
                key={social.label}
                href={social.href}
                className={styles.socialPill}
                {...(isMail ? {} : { target: '_blank', rel: 'noreferrer' })}
              >
                <Icon size={15} />
                {social.label}
              </a>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Hero;
