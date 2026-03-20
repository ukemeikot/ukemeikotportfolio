// REFACTORED
import { memo, useMemo } from 'react';
import styles from './AnimatedText.module.css';

interface AnimatedTextProps {
  lines: string[];
}

const AnimatedText = ({ lines }: AnimatedTextProps) => {
  const lineData = useMemo(
    () =>
      lines.map((line, lineIndex) => {
        const offset = lines
          .slice(0, lineIndex)
          .flatMap((item) => item.split(' ').filter(Boolean))
          .length;

        return {
          line,
          words: line.split(' ').filter(Boolean).map((word, wordIndex) => ({
            word,
            delay: (offset + wordIndex) * 80,
          })),
        };
      }),
    [lines]
  );

  return (
    <div className={styles.wrapper} aria-label={lines.join(' ')}>
      {lineData.map((line) => (
        <span key={line.line} className={styles.line}>
          {line.words.map(({ word, delay }) => (
            <span
              key={`${word}-${delay}`}
              className={styles.word}
              style={{ animationDelay: `${delay}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default memo(AnimatedText);
