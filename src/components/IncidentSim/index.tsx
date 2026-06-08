// REFACTORED
import { RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { INCIDENT_START, incident, type IncidentChoice } from '../../data/incident';
import styles from './IncidentSim.module.css';

const IncidentSim = () => {
  const [current, setCurrent] = useState(INCIDENT_START);
  const [log, setLog] = useState<string[]>([]);

  const scene = incident[current];

  const choose = (choice: IncidentChoice) => {
    setLog((entries) => [...entries, choice.label]);
    setCurrent(choice.to);
  };

  const restart = () => {
    setCurrent(INCIDENT_START);
    setLog([]);
  };

  return (
    <div className={styles.sim}>
      <div className={styles.bar}>
        <span className={styles.barTitle}>incident-sim</span>
        {log.length > 0 ? (
          <button type="button" className={styles.reset} onClick={restart}>
            <RotateCcw size={13} />
            Restart
          </button>
        ) : null}
      </div>

      <div className={styles.body}>
        {log.length > 0 ? (
          <ol className={styles.timeline}>
            {log.map((entry, index) => (
              <li key={`${index}-${entry}`} className={styles.timelineItem}>
                <span className={styles.timeStamp}>03:0{Math.min(index, 9)}</span>
                {entry}
              </li>
            ))}
          </ol>
        ) : null}

        {scene.ending ? (
          <div className={`${styles.ending} ${styles[scene.ending.tone]}`.trim()}>
            <span className={styles.endingLabel}>Incident closed</span>
            <h3 className={styles.endingTitle}>{scene.ending.title}</h3>
            <p className={styles.endingVerdict}>{scene.ending.verdict}</p>
            <button type="button" className={styles.playAgain} onClick={restart}>
              <RotateCcw size={15} />
              Run it again
            </button>
          </div>
        ) : (
          <>
            {scene.status ? <p className={styles.status}>{scene.status}</p> : null}
            <p className={styles.text}>{scene.text}</p>
            <div className={styles.choices}>
              {scene.choices?.map((choice) => (
                <button
                  key={choice.to + choice.label}
                  type="button"
                  className={styles.choice}
                  onClick={() => choose(choice)}
                >
                  <span className={styles.choiceArrow} aria-hidden="true">
                    &gt;
                  </span>
                  {choice.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IncidentSim;
