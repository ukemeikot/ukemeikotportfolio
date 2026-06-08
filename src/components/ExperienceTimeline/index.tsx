// REFACTORED
import { memo } from 'react';
import { experienceMeta } from '../../data/experience';
import type { ExperienceEntry } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import styles from './ExperienceTimeline.module.css';

interface ExperienceTimelineProps {
  items: ExperienceEntry[];
}

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => (
  <section id="experience" className={styles.section}>
    <div className={styles.inner}>
      <h2 className={styles.heading}>Work</h2>

      <div className={styles.table}>
        {items.map((item, index) => (
          <ScrollReveal key={`${item.company}-${item.period}`} delay={index * 80}>
            <div className={styles.row}>
              <div className={styles.period}>
                <span className={styles.periodMain}>{item.period}</span>
                <span className={styles.duration}>{item.duration}</span>
              </div>
              <div className={styles.company}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.companyLink}
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </div>
              <div className={styles.role}>
                {item.role}
                <span className={styles.stack}>{item.stack}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <p className={styles.total}>
        {experienceMeta.totalLabel}
        <span className={styles.totalValue}>{experienceMeta.totalValue}</span>
      </p>
    </div>
  </section>
);

export default memo(ExperienceTimeline);
