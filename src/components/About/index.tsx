// REFACTORED
import type { AboutContent } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import SectionWrapper from '../SectionWrapper';
import styles from './About.module.css';

interface AboutProps {
  content: AboutContent;
}

const About = ({ content }: AboutProps) => (
  <SectionWrapper id="about" eyebrow={content.eyebrow} title={content.title}>
    <div className={styles.layout}>
      <div className={styles.body}>
        {content.body.map((paragraph, index) => (
          <ScrollReveal key={paragraph} delay={index * 120}>
            <p className={styles.paragraph}>{paragraph}</p>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={160}>
        <dl className={styles.facts}>
          {content.facts.map((fact) => (
            <div key={fact.label} className={styles.factItem}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>
    </div>
  </SectionWrapper>
);

export default About;
