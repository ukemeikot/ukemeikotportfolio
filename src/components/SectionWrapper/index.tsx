// REFACTORED
import type { PropsWithChildren } from 'react';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps extends PropsWithChildren {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: 'left' | 'center';
}

const SectionWrapper = ({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  children,
}: SectionWrapperProps) => (
  <section id={id} className={styles.section}>
    <div className={styles.inner}>
      {(eyebrow || title || intro) && (
        <header className={align === 'center' ? styles.headerCenter : styles.header}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          {title ? <h2 className={styles.title}>{title}</h2> : null}
          {intro ? <p className={styles.intro}>{intro}</p> : null}
        </header>
      )}
      {children}
    </div>
  </section>
);

export default SectionWrapper;
