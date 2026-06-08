// REFACTORED
import { memo } from 'react';
import type { SkillCategory } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import styles from './Skills.module.css';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills = ({ skills }: SkillsProps) => (
  <section id="skills" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.cards}>
        {skills.map((skill, index) => (
          <ScrollReveal key={skill.title} delay={index * 90} className={styles.reveal}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.list}>
                {skill.items.map((item, itemIndex) => (
                  <span key={item} className={styles.item}>
                    {item}
                    {itemIndex < skill.items.length - 1 ? (
                      <span className={styles.sep} aria-hidden="true">/</span>
                    ) : null}
                  </span>
                ))}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
      <p className={styles.note}>
        Some of my <em>favorite technologies, topics, and tools</em> that I work with.
      </p>
    </div>
  </section>
);

export default memo(Skills);
