// REFACTORED
import type { AboutContent } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import styles from './About.module.css';

interface AboutProps {
  content: AboutContent;
}

const About = ({ content }: AboutProps) => (
  <section id="about" className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.label}>{content.eyebrow}</p>
      <ScrollReveal className={styles.text}>
        <p className={styles.greeting}>
          {content.greetingLead}
          <em className={styles.emphasis}>{content.greetingEmphasis}</em>
          {content.greetingTrail}
        </p>
        <p className={styles.experience}>
          {content.experienceLead}
          <em className={styles.emphasis}>{content.experienceEmphasis}</em>
          {content.experienceTrail}
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
