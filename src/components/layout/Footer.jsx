import { Link } from 'react-router-dom';
import Container from './Container';
import { navLinks, footerLinks } from '../../app/nav.config';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          {/* Logo and Description */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-placeholder">
                <span>NW</span>
              </div>
              <span className="footer__logo-text">National Waqf</span>
            </Link>
            <p className="footer__description">
              Empowering communities through sustainable charitable giving based on Islamic principles of Waqf.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav className="footer__legal-nav" aria-label="Legal">
            <h4 className="footer__nav-title">Legal</h4>
            <ul className="footer__nav-list">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__nav-title">Contact</h4>
            <address className="footer__address">
              <p>National Waqf Foundation</p>
              <p>London, United Kingdom</p>
              <p>
                <a href="mailto:info@nationalwaqf.org">info@nationalwaqf.org</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} National Waqf Foundation. All rights reserved.
          </p>
          <p className="footer__charity">
            Registered Charity No: 0000000
          </p>
        </div>
      </Container>
    </footer>
  );
}
