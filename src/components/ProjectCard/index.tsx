// REFACTORED
import { ArrowUpRight } from 'lucide-react';
import { memo } from 'react';
import type { ProjectEntry } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectEntry;
  delay?: number;
  onOpen: (project: ProjectEntry) => void;
}

const ProjectCard = ({ project, delay = 0, onOpen }: ProjectCardProps) => (
  <ScrollReveal delay={delay}>
    <article className={styles.card}>
      <div className={styles.top}>
        <p className={styles.type}>{project.type}</p>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
      <div className={styles.copy}>
        <p className={styles.line}><strong>What it is:</strong> {project.summary}</p>
        <p className={styles.line}><strong>Technical challenge:</strong> {project.challenge}</p>
        <p className={styles.line}>{project.stackLine}</p>
        <p className={styles.line}>{project.impact}</p>
      </div>
      <button className={styles.link} onClick={() => onOpen(project)}>
        View project
        <ArrowUpRight size={16} />
      </button>
    </article>
  </ScrollReveal>
);

export default memo(ProjectCard);
