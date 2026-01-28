import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, headerActions } from '../../app/nav.config';
import NavLink from '../navigation/NavLink';
import MobileMenu from '../navigation/MobileMenu';
import Button from '../ui/Button';
import LogoDark from '../../assets/logo/logo-dark.svg';
import LogoLight from '../../assets/logo/logo-light.svg';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPastHeroThreshold, setIsPastHeroThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Find hero section and calculate 20% threshold
      const heroSection = document.querySelector('.home-hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const heroTop = heroSection.offsetTop;
        const threshold = heroTop + heroHeight * 0.2;

        // Check if scrolled past 20% of hero
        setIsPastHeroThreshold(currentScrollY > threshold);
      }
    };

    // Initial check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className={`header__inner ${isPastHeroThreshold ? 'header__inner--past-hero' : ''}`}>
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="National Waqf - Home">
          <img
            src={LogoDark}
            alt="National Waqf"
            className={`header__logo-img header__logo-img--dark ${isPastHeroThreshold ? 'header__logo-img--hidden' : ''}`}
          />
          <img
            src={LogoLight}
            alt="National Waqf"
            className={`header__logo-img header__logo-img--light ${isPastHeroThreshold ? '' : 'header__logo-img--hidden'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navLinks
              .filter((link) => link.path !== '/apply')
              .map((link) => (
                <li key={link.path} className="header__nav-item">
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="header__actions">
          <Link to={headerActions.signIn.path} className="header__sign-in-link">
            {headerActions.signIn.label}
          </Link>
          <Button
            to={headerActions.applyGrant.path}
            variant="secondary"
            size="small"
            className="header__apply-btn"
          >
            {headerActions.applyGrant.label}
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
