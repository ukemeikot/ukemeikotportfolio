// REFACTORED
import { memo, useEffect, useState } from 'react';
import { quotes } from '../../data/quotes';
import styles from './Quotes.module.css';

const ROTATE_MS = 6000;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Quotes = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || prefersReducedMotion()) {
      return undefined;
    }
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const quote = quotes[index];

  return (
    <figure
      className={styles.card}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="Software engineering quotes"
    >
      <span className={styles.mark} aria-hidden="true">
        &ldquo;
      </span>

      {/* key remounts the block so the slide/fade replays each rotation */}
      <blockquote key={index} className={styles.quote}>
        <p className={styles.text}>{quote.text}</p>
        <figcaption className={styles.author}>— {quote.author}</figcaption>
      </blockquote>
    </figure>
  );
};

export default memo(Quotes);
