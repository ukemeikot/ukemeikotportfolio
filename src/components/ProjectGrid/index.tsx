// REFACTORED
import { useMemo, useState } from 'react';
import type { ProjectCategory, ProjectEntry, ProjectFilter } from '../../data/types';
import ProjectCard from '../ProjectCard';
import SectionWrapper from '../SectionWrapper';
import TechConstellation from '../TechConstellation';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: ProjectEntry[];
  onOpen: (project: ProjectEntry) => void;
}

const filters: ProjectFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'frontend-mobile', label: 'Frontend & Mobile' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps' },
];

// Xental (payments infrastructure) leads, then the other products, then the rest.
const FEATURED_ORDER = [
  'xental',
  'readhub',
  'kredar',
  'fitcall',
  'crednews-newsroom',
  'messaging-calling-backend',
];

const ProjectGrid = ({ projects, onOpen }: ProjectGridProps) => {
  const [active, setActive] = useState<'all' | ProjectCategory>('all');

  const ordered = useMemo(() => {
    const rank = (slug: string) => {
      const index = FEATURED_ORDER.indexOf(slug);
      return index === -1 ? FEATURED_ORDER.length : index;
    };
    return [...projects].sort((a, b) => rank(a.slug) - rank(b.slug));
  }, [projects]);

  const visible = useMemo(
    () =>
      active === 'all'
        ? ordered
        : ordered.filter((project) => project.categories.includes(active as ProjectCategory)),
    [active, ordered]
  );

  return (
    <SectionWrapper
      id="projects"
      eyebrow="... /Projects ..."
      title="Selected work across the stack."
      intro="Frontend, mobile, backend, and DevOps — filter by the layer you care about."
    >
      <TechConstellation projects={ordered} onOpen={onOpen} />

      <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
        {filters.map((filter) => {
          const count =
            filter.id === 'all'
              ? ordered.length
              : ordered.filter((project) =>
                  project.categories.includes(filter.id as ProjectCategory)
                ).length;
          return (
            <button
              key={filter.id}
              role="tab"
              aria-selected={active === filter.id}
              className={`${styles.filter} ${active === filter.id ? styles.filterActive : ''}`.trim()}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
              <span className={styles.count}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.grid}>
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            delay={index * 60}
            onOpen={onOpen}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectGrid;
