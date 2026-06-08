// REFACTORED
import { ArrowRight, Check, Eye, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { pipelineScenarios } from '../../data/pipeline';
import styles from './TraceRequest.module.css';

const shuffle = (input: string[]) => {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  // Avoid handing back the already-correct order.
  if (array.every((value, index) => value === input[index]) && array.length > 1) {
    [array[0], array[1]] = [array[1], array[0]];
  }
  return array;
};

const TraceRequest = () => {
  const [index, setIndex] = useState(0);
  const scenario = pipelineScenarios[index];
  const correct = scenario.stages;

  const [pool, setPool] = useState<string[]>(() => shuffle(scenario.stages));
  const [built, setBuilt] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const allCorrect =
    checked && built.length === correct.length && built.every((s, i) => s === correct[i]);
  const rightCount = built.filter((s, i) => s === correct[i]).length;

  const place = (stage: string) => {
    if (checked) return;
    setBuilt((current) => [...current, stage]);
    setPool((current) => current.filter((s) => s !== stage));
  };

  const unplace = (position: number) => {
    if (checked) return;
    setBuilt((current) => current.filter((_, i) => i !== position));
    setPool((current) => [...current, built[position]]);
  };

  const reset = () => {
    setPool(shuffle(scenario.stages));
    setBuilt([]);
    setChecked(false);
    setRevealed(false);
  };

  const nextScenario = () => {
    const next = (index + 1) % pipelineScenarios.length;
    setIndex(next);
    setPool(shuffle(pipelineScenarios[next].stages));
    setBuilt([]);
    setChecked(false);
    setRevealed(false);
  };

  return (
    <div className={styles.trace}>
      <div className={styles.bar}>
        <span className={styles.barTitle}>trace-the-request</span>
        <span className={styles.counter}>
          {index + 1}/{pipelineScenarios.length}
        </span>
      </div>

      <div className={styles.body}>
        <p className={styles.request}>{scenario.request}</p>
        <p className={styles.hint}>Order the stages this request flows through.</p>

        <ol className={styles.pipeline}>
          {correct.map((_, position) => {
            const value = built[position];
            const slotState = !checked
              ? ''
              : value === correct[position]
                ? styles.slotCorrect
                : styles.slotWrong;
            return (
              <li key={position} className={`${styles.slot} ${slotState}`.trim()}>
                <span className={styles.slotNum}>{position + 1}</span>
                {value ? (
                  <button
                    type="button"
                    className={styles.placed}
                    onClick={() => unplace(position)}
                    disabled={checked}
                  >
                    {value}
                  </button>
                ) : (
                  <span className={styles.empty}>—</span>
                )}
              </li>
            );
          })}
        </ol>

        {pool.length > 0 && !checked ? (
          <div className={styles.pool}>
            {pool.map((stage) => (
              <button key={stage} type="button" className={styles.chip} onClick={() => place(stage)}>
                {stage}
              </button>
            ))}
          </div>
        ) : null}

        <div className={styles.actions}>
          {!checked ? (
            <>
              <button
                type="button"
                className={styles.primary}
                onClick={() => setChecked(true)}
                disabled={built.length !== correct.length}
              >
                <Check size={15} />
                Check order
              </button>
              {built.length > 0 ? (
                <button type="button" className={styles.ghost} onClick={reset}>
                  <RotateCcw size={14} />
                  Reset
                </button>
              ) : null}
            </>
          ) : null}
        </div>

        {checked ? (
          <div className={`${styles.result} ${allCorrect ? styles.resultGood : ''}`.trim()}>
            {allCorrect ? (
              <>
                <p className={styles.resultTitle}>Correct ✓ Nicely traced.</p>
                <p className={styles.resultText}>{scenario.explanation}</p>
                <button type="button" className={styles.primary} onClick={nextScenario}>
                  Next request
                  <ArrowRight size={15} />
                </button>
              </>
            ) : (
              <>
                <p className={styles.resultTitle}>
                  {rightCount} of {correct.length} in the right spot.
                </p>
                {revealed ? (
                  <>
                    <ol className={styles.answer}>
                      {correct.map((stage, i) => (
                        <li key={stage} className={styles.answerItem}>
                          <span className={styles.slotNum}>{i + 1}</span>
                          {stage}
                        </li>
                      ))}
                    </ol>
                    <p className={styles.resultText}>{scenario.explanation}</p>
                    <button type="button" className={styles.primary} onClick={nextScenario}>
                      Next request
                      <ArrowRight size={15} />
                    </button>
                  </>
                ) : (
                  <div className={styles.actions}>
                    <button type="button" className={styles.primary} onClick={reset}>
                      <RotateCcw size={14} />
                      Try again
                    </button>
                    <button
                      type="button"
                      className={styles.ghost}
                      onClick={() => setRevealed(true)}
                    >
                      <Eye size={14} />
                      Reveal answer
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TraceRequest;
