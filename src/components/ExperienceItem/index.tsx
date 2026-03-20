// REFACTORED
import { memo } from 'react';
import type { ExperienceEntry } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import styles from './ExperienceItem.module.css';

interface ExperienceItemProps {
  item: ExperienceEntry;
  delay?: number;
}

const ExperienceItem = ({ item, delay = 0 }: ExperienceItemProps) => (
  <ScrollReveal delay={delay}>
    <article className={styles.card}>
      <div className={styles.meta}>
        <p className={styles.eyebrow}>{item.eyebrow}</p>
        <p className={styles.period}>{item.period}</p>
      </div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.summary}>{item.summary}</p>
      <ul className={styles.list}>
        {item.highlights.map((highlight) => (
          <li key={highlight} className={styles.item}>
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  </ScrollReveal>
);

export default memo(ExperienceItem);
