import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, headerActions } from '../../app/nav.config';
import NavLink from '../navigation/NavLink';
import MobileMenu from '../navigation/MobileMenu';
import Button from '../ui/Button';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only trigger animation after scrolling past a threshold (e.g., 100px)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsScrolled(true);
        } else {
          // Scrolling up
          setIsScrolled(false);
        }
      } else {
        // At top of page
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className="header">
      <div className={`header__inner ${isScrolled ? 'header__inner--condensed' : ''}`}>
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="National Waqf - Home">
          <span className="header__logo-mark">NW</span>
          <span className="header__logo-text">National Waqf</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="header__nav-item">
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="header__actions">
          <Button to={headerActions.signIn.path} variant="secondary" size="small" className="header__sign-in-btn">
            {headerActions.signIn.label}
          </Button>
          <Button to={headerActions.donate.path} variant="donate" size="small" className="header__donate-btn">
            {headerActions.donate.label}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="header__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="header__hamburger">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
