// REFACTORED
import { useState } from 'react';
import { quiz } from '../../data/quiz';
import styles from './CodeQuiz.module.css';

const CodeQuiz = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [done, setDone] = useState(false);

  const question = quiz[index];
  const isLast = index + 1 >= quiz.length;

  const choose = (choice: number) => {
    if (selected !== null) {
      return;
    }
    setSelected(choice);
    if (choice === question.answer) {
      setScore((value) => value + 1);
      setStreak((value) => value + 1);
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    if (isLast) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setStreak(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className={styles.quiz}>
        <div className={styles.results}>
          <p className={styles.resultsScore}>
            {score} / {quiz.length}
          </p>
          <p className={styles.resultsLabel}>
            {score === quiz.length
              ? 'Flawless. You know your JS quirks.'
              : score >= quiz.length / 2
                ? 'Solid run — JavaScript still bites everyone.'
                : 'JavaScript is weird. Run it back?'}
          </p>
          <button type="button" className={styles.next} onClick={restart}>
            Play again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.head}>
        <span>
          Question {index + 1} / {quiz.length}
        </span>
        <span>
          score {score} · streak {streak}
        </span>
      </div>

      <p className={styles.prompt}>What does this log?</p>
      <pre className={styles.code}>{question.code}</pre>

      <div className={styles.options}>
        {question.options.map((option, optionIndex) => {
          const state =
            selected === null
              ? ''
              : optionIndex === question.answer
                ? styles.correct
                : optionIndex === selected
                  ? styles.wrong
                  : styles.dim;
          return (
            <button
              key={option}
              type="button"
              className={`${styles.option} ${state}`.trim()}
              onClick={() => choose(optionIndex)}
              disabled={selected !== null}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected !== null ? (
        <div className={styles.feedback}>
          <p className={styles.feedbackText}>
            <strong>{selected === question.answer ? 'Correct ✓' : 'Not quite.'}</strong>{' '}
            {question.explanation}
          </p>
          <button type="button" className={styles.next} onClick={next}>
            {isLast ? 'See results' : 'Next →'}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CodeQuiz;
