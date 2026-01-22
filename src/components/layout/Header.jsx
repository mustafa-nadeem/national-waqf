import { useState, useEffect, useRef } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHeroThreshold, setIsPastHeroThreshold] = useState(false);
  
  // Use refs to avoid re-renders and track scroll state
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('down');
  const scrollDelta = useRef(0);

  useEffect(() => {
    const SCROLL_THRESHOLD = 100; // Minimum scroll before triggering condense
    const DELTA_THRESHOLD = 15; // Minimum scroll delta to change direction

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      
      // Find hero section and calculate 97% threshold
      const heroSection = document.querySelector('.home-hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const heroTop = heroSection.offsetTop;
        const threshold = heroTop + (heroHeight * 0.97);
        
        // Check if scrolled past 97% of hero
        setIsPastHeroThreshold(currentScrollY > threshold);
      }
      
      // Accumulate scroll delta in current direction
      if ((delta > 0 && scrollDirection.current === 'down') || 
          (delta < 0 && scrollDirection.current === 'up')) {
        scrollDelta.current += Math.abs(delta);
      } else {
        // Direction changed, reset delta
        scrollDelta.current = Math.abs(delta);
        scrollDirection.current = delta > 0 ? 'down' : 'up';
      }
      
      // Navbar condensing logic
      // Only trigger animation after scrolling past threshold and with significant delta
      if (currentScrollY > SCROLL_THRESHOLD) {
        if (scrollDirection.current === 'down' && scrollDelta.current > DELTA_THRESHOLD) {
          // Scrolling down with enough momentum
          setIsScrolled(true);
        } else if (scrollDirection.current === 'up' && scrollDelta.current > DELTA_THRESHOLD) {
          // Scrolling up with enough momentum
          setIsScrolled(false);
        }
      } else {
        // At top of page
        setIsScrolled(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Initial check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      lastScrollY.current = window.scrollY;
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
      <div className={`header__inner ${isScrolled ? 'header__inner--condensed' : ''} ${isPastHeroThreshold ? 'header__inner--past-hero' : ''}`}>
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
