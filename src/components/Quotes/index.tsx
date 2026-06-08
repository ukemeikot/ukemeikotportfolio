// REFACTORED
import { memo, useEffect, useState } from 'react';
import { quotes } from '../../data/quotes';
import styles from './Quotes.module.css';

const ROTATE_MS = 5200;

const Quotes = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, []);

  const quote = quotes[index];

  return (
    <section className={styles.section} aria-label="Software engineering quotes">
      <div className={styles.inner}>
        <span className={styles.mark} aria-hidden="true">
          &ldquo;
        </span>
        {/* key forces a remount so the fade/slide replays on each rotation */}
        <blockquote key={index} className={styles.quote}>
          <p className={styles.text}>{quote.text}</p>
          <footer className={styles.author}>— {quote.author}</footer>
        </blockquote>
        <div className={styles.dots}>
          {quotes.map((item, dotIndex) => (
            <button
              key={item.author}
              type="button"
              aria-label={`Show quote ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              className={`${styles.dot} ${dotIndex === index ? styles.dotActive : ''}`.trim()}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Quotes);
