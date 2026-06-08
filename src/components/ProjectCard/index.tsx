// REFACTORED
import { ArrowUpRight } from 'lucide-react';
import { memo } from 'react';
import type { ProjectCategory, ProjectEntry } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectEntry;
  delay?: number;
  onOpen: (project: ProjectEntry) => void;
}

const categoryLabels: Record<ProjectCategory, string> = {
  'frontend-mobile': 'Frontend / Mobile',
  backend: 'Backend',
  devops: 'DevOps',
};

const ProjectCard = ({ project, delay = 0, onOpen }: ProjectCardProps) => (
  <ScrollReveal delay={delay} className={styles.reveal}>
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-label={`Open project: ${project.title}`}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen(project);
        }
      }}
    >
      <div className={styles.top}>
        <div className={styles.tags}>
          {project.categories.map((category) => (
            <span key={category} className={styles.tag}>
              {categoryLabels[category]}
            </span>
          ))}
        </div>
        <p className={styles.type}>{project.type}</p>
        <h3 className={styles.title}>{project.title}</h3>
      </div>

      <p className={styles.summary}>{project.summary}</p>

      <ul className={styles.tech}>
        {project.tech.slice(0, 6).map((item) => (
          <li key={item} className={styles.techItem}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <span className={styles.link}>
          View project
          <ArrowUpRight size={16} />
        </span>
        {project.liveUrl ? (
          <a
            className={styles.liveLink}
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            Live
          </a>
        ) : null}
      </div>
    </article>
  </ScrollReveal>
);

export default memo(ProjectCard);
