// REFACTORED
import { useState, type FormEvent } from 'react';
import type { SocialLink } from '../../data/types';
import styles from './Footer.module.css';

interface FooterProps {
  email: string;
  socials: SocialLink[];
}

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

const Footer = ({ email, socials }: FooterProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formEndpoint) {
      setStatus('error');
      setMessage('Add your Formspree endpoint to the .env file before submitting.');
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      form.reset();
      setStatus('success');
      setMessage('Message sent successfully. I will get back to you soon.');
    } catch {
      setStatus('error');
      setMessage('Something went wrong while sending your message. Please try again.');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Contact</p>
          <p className={styles.blurb}>
            Share a short brief and I will follow up with the best next step.
          </p>
          <div className={styles.links}>
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={styles.link}>
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span className={styles.label}>Name</span>
            <input className={styles.input} type="text" name="name" required placeholder="Your name" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              defaultValue={email}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Description</span>
            <textarea
              className={styles.textarea}
              name="description"
              required
              rows={5}
              placeholder="Tell me about the product, problem, or project."
            />
          </label>

          <button
            type="submit"
            className={`${styles.submit} ${status === 'submitting' ? styles.submitting : ''}`.trim()}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send message'}
          </button>

          {message ? (
            <p
              className={`${styles.feedback} ${
                status === 'success' ? styles.feedbackSuccess : styles.feedbackError
              }`.trim()}
            >
              {message}
            </p>
          ) : null}
        </form>

        <p className={styles.meta}>© 2026 Ukeme Ikot · Nigeria</p>
      </div>
    </footer>
  );
};

export default Footer;
