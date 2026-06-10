// REFACTORED
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import avatarImg from '../../assets/ukeme.jpg';
import type { NavItem } from '../../data/types';
import styles from './Navbar.module.css';

interface NavbarProps {
  items: NavItem[];
  onNavigate: (id: string) => void;
}

const Navbar = ({ items, onNavigate }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setCondensed(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${condensed ? styles.condensed : ''}`.trim()}>
        <div className={styles.inner}>
          <button className={styles.brand} onClick={() => handleNavigate('home')}>
            <img src={avatarImg} alt="Ukeme Ikot" className={styles.brandAvatar} />
            <span className={styles.brandText}>
              <span className={styles.brandName}>Ukeme</span>
              <span className={styles.brandName}>Ikot</span>
            </span>
          </button>
          <div className={styles.desktopNav}>
            {items.map((item) => (
              <button key={item.id} className={styles.link} onClick={() => handleNavigate(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
          <div className={styles.actions}>
            <button
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={styles.mobileMenu}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen ? (
        <div className={styles.overlay}>
          {items.map((item) => (
            <button key={item.id} className={styles.overlayLink} onClick={() => handleNavigate(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
