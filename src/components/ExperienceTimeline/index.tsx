// REFACTORED
import type { ExperienceEntry } from '../../data/types';
import ExperienceItem from '../ExperienceItem';
import SectionWrapper from '../SectionWrapper';
import styles from './ExperienceTimeline.module.css';

interface ExperienceTimelineProps {
  items: ExperienceEntry[];
}

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => (
  <SectionWrapper
    id="experience"
    eyebrow="Experience"
    title="Shipping work across product engineering and platform delivery."
    intro="The common thread is ownership: clear architecture, strong implementation, and systems that stay dependable after launch."
  >
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <ExperienceItem key={item.title} item={item} delay={index * 120} />
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceTimeline;
