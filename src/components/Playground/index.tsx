// REFACTORED
import { useState } from 'react';
import CodeQuiz from '../CodeQuiz';
import IncidentSim from '../IncidentSim';
import SectionWrapper from '../SectionWrapper';
import TraceRequest from '../TraceRequest';
import styles from './Playground.module.css';

type Tab = 'incident' | 'trace' | 'quiz';

const Playground = () => {
  const [tab, setTab] = useState<Tab>('incident');

  return (
    <SectionWrapper
      id="playground"
      eyebrow="... /Playground ..."
      title="Stick around and play."
      intro="Survive a 3 AM production incident, trace a request through the stack, then test your JavaScript instincts."
      align="center"
    >
      <div className={styles.tabs} role="tablist" aria-label="Playground games">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'incident'}
          className={`${styles.tab} ${tab === 'incident' ? styles.tabActive : ''}`.trim()}
          onClick={() => setTab('incident')}
        >
          On-Call Incident
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'trace'}
          className={`${styles.tab} ${tab === 'trace' ? styles.tabActive : ''}`.trim()}
          onClick={() => setTab('trace')}
        >
          Trace the Request
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'quiz'}
          className={`${styles.tab} ${tab === 'quiz' ? styles.tabActive : ''}`.trim()}
          onClick={() => setTab('quiz')}
        >
          Guess the Output
        </button>
      </div>

      <div className={styles.panel}>
        {tab === 'incident' ? <IncidentSim /> : tab === 'trace' ? <TraceRequest /> : <CodeQuiz />}
      </div>
    </SectionWrapper>
  );
};

export default Playground;
