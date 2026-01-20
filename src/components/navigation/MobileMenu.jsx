import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import Button from '../ui/Button';
import { navLinks, headerActions } from '../../app/nav.config';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`mobile-menu-backdrop ${isOpen ? 'mobile-menu-backdrop--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <nav
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu__content">
          {/* Navigation Links */}
          <ul className="mobile-menu__nav">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} onClick={onClose}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <hr className="mobile-menu__divider" />

          {/* Actions */}
          <div className="mobile-menu__actions">
            <Button
              to={headerActions.applyGrant.path}
              variant="secondary"
              fullWidth
              onClick={onClose}
            >
              {headerActions.applyGrant.label}
            </Button>
            
            <Link
              to={headerActions.signIn.path}
              className="mobile-menu__sign-in"
              onClick={onClose}
            >
              {headerActions.signIn.label}
            </Link>

            <Button
              to={headerActions.donate.path}
              variant="primary"
              fullWidth
              onClick={onClose}
            >
              {headerActions.donate.label}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
