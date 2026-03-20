// REFACTORED
import { ArrowUpRight } from 'lucide-react';
import type { HeroContent, ProjectImage, SocialLink } from '../../data/types';
import AnimatedText from '../AnimatedText';
import ScrollReveal from '../ScrollReveal';
import styles from './Hero.module.css';

interface HeroProps {
  content: HeroContent;
  socials: SocialLink[];
  portrait: ProjectImage;
  onNavigate: (id: string) => void;
}

const Hero = ({ content, socials, portrait, onNavigate }: HeroProps) => (
  <section id="home" className={styles.hero}>
    <div className={styles.inner}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h1 className={styles.title}>
          <AnimatedText lines={content.headline} />
        </h1>
        <ScrollReveal delay={120}>
          <p className={styles.summary}>{content.summary}</p>
        </ScrollReveal>
        <ScrollReveal delay={220}>
          <p className={styles.focus}>{content.focus}</p>
        </ScrollReveal>
        <ScrollReveal delay={320}>
          <div className={styles.actions}>
            <button className={styles.primary} onClick={() => onNavigate('projects')}>
              View selected work
            </button>
            <button className={styles.secondary} onClick={() => onNavigate('contact')}>
              Start a conversation
            </button>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={420}>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                {social.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal className={styles.media} delay={180}>
        <div className={styles.portraitWrap}>
          <div className={styles.portraitGlow} aria-hidden="true" />
          <img
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            className={styles.portrait}
            fetchPriority="high"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Hero;
