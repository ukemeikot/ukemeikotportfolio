// REFACTORED
import { ArrowUpRight, Github } from 'lucide-react';
import { memo } from 'react';
import type { RepoEntry } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import SectionWrapper from '../SectionWrapper';
import styles from './Repos.module.css';

interface ReposProps {
  repos: RepoEntry[];
}

const Repos = ({ repos }: ReposProps) => (
  <SectionWrapper
    id="repos"
    eyebrow="... /Open source ..."
    title="More on GitHub."
    intro="High-quality repositories worth reading — work without a live production link, kept here as source."
  >
    <div className={styles.grid}>
      {repos.map((repo, index) => (
        <ScrollReveal key={repo.name} delay={index * 60} className={styles.reveal}>
          <article className={styles.card}>
            <div className={styles.top}>
              <div className={styles.head}>
                <Github size={18} className={styles.ghIcon} />
                <span className={styles.role}>{repo.role}</span>
              </div>
              <h3 className={styles.title}>{repo.name}</h3>
            </div>

            <p className={styles.description}>{repo.description}</p>

            <ul className={styles.tech}>
              {repo.tech.slice(0, 6).map((item) => (
                <li key={item} className={styles.techItem}>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.links}>
              {repo.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  </SectionWrapper>
);

export default memo(Repos);
