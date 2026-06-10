// REFACTORED
import { MoonStar, SunMedium } from 'lucide-react';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  theme: 'light' | 'dark' | null;
  onToggle: () => void;
}

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    className={styles.toggle}
    onClick={onToggle}
  >
    {theme === 'light' ? <MoonStar size={18} /> : <SunMedium size={18} />}
  </button>
);

export default ThemeToggle;
