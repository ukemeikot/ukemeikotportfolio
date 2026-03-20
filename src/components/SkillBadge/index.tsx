// REFACTORED
import { memo } from 'react';
import type { SkillCategory } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
  skill: SkillCategory;
  delay?: number;
}

const SkillBadge = ({ skill, delay = 0 }: SkillBadgeProps) => {
  const Icon = skill.icon;

  return (
    <ScrollReveal delay={delay}>
      <article className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrap}>
            <Icon size={20} />
          </div>
          <h3 className={styles.title}>{skill.title}</h3>
        </div>
        <p className={styles.description}>{skill.description}</p>
        <ul className={styles.list}>
          {skill.items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </ScrollReveal>
  );
};

export default memo(SkillBadge);
