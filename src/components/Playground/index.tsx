// REFACTORED
import { useState } from 'react';
import CodeQuiz from '../CodeQuiz';
import SectionWrapper from '../SectionWrapper';
import Terminal from '../Terminal';
import styles from './Playground.module.css';

type Tab = 'terminal' | 'quiz';

const Playground = () => {
  const [tab, setTab] = useState<Tab>('terminal');

  return (
    <SectionWrapper
      id="playground"
      eyebrow="... /Playground ..."
      title="Stick around and play."
      intro="A terminal to explore the site, and a JavaScript trivia game to test your instincts."
    >
      <div className={styles.tabs} role="tablist" aria-label="Playground games">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'terminal'}
          className={`${styles.tab} ${tab === 'terminal' ? styles.tabActive : ''}`.trim()}
          onClick={() => setTab('terminal')}
        >
          Terminal
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
        {tab === 'terminal' ? <Terminal /> : <CodeQuiz />}
      </div>
    </SectionWrapper>
  );
};

export default Playground;
