// REFACTORED
import { ArrowUpRight } from 'lucide-react';
import type { ArticleEntry } from '../../data/types';
import ScrollReveal from '../ScrollReveal';
import SectionWrapper from '../SectionWrapper';
import styles from './Articles.module.css';

interface ArticlesProps {
  articles: ArticleEntry[];
}

const Articles = ({ articles }: ArticlesProps) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="articles" eyebrow="... /Articles ..." title="Writing & deep dives.">
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <ScrollReveal key={article.title} delay={index * 60} className={styles.reveal}>
            <article className={styles.card}>
              <div className={styles.cardTop}>
                {article.tag ? <span className={styles.tag}>{article.tag}</span> : null}
                {article.readTime ? (
                  <span className={styles.readTime}>{article.readTime}</span>
                ) : null}
              </div>
              <h3 className={styles.cardTitle}>{article.title}</h3>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className={styles.readMore}
              >
                Read more
                <ArrowUpRight size={16} />
              </a>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Articles;
