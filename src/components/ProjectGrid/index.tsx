// REFACTORED
import { memo } from 'react';
import type { ProjectEntry } from '../../data/types';
import ProjectCard from '../ProjectCard';
import SectionWrapper from '../SectionWrapper';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: ProjectEntry[];
  onOpen: (project: ProjectEntry) => void;
}

const ProjectGrid = ({ projects, onOpen }: ProjectGridProps) => (
  <SectionWrapper
    id="projects"
    eyebrow="Selected Work"
    title="Projects that blend product thinking with systems depth."
    intro="Each project balances interface quality, implementation detail, and the operational realities behind production software."
  >
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          delay={index * 100}
          onOpen={onOpen}
        />
      ))}
    </div>
  </SectionWrapper>
);

export default memo(ProjectGrid);
