import { Link } from 'react-router-dom';
import { navLinks, footerLinks } from '../../app/nav.config';
import LogoDark from '../../assets/logo/logo-dark.svg';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Filter nav links to exclude "Apply for a Grant" as it's in the header
  const footerNavLinks = navLinks.filter((link) => link.path !== '/apply');

  // Social media links
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/national-waqf', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/nationalwaqf', icon: 'twitter' },
    { name: 'YouTube', url: 'https://youtube.com/@nationalwaqf', icon: 'youtube' },
    { name: 'Instagram', url: 'https://instagram.com/nationalwaqf', icon: 'instagram' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          {/* Left Side - Brand, CTA, Social */}
          <div className="footer__left">
            <Link to="/" className="footer__logo" aria-label="National Waqf - Home">
              <img src={LogoDark} alt="National Waqf" className="footer__logo-img" />
            </Link>
            <Link to="/learn-more" className="footer__cta">
              Learn More →
            </Link>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.name}
                >
                  {social.icon === 'linkedin' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.icon === 'twitter' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.icon === 'youtube' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Three Columns */}
          <div className="footer__right">
            {/* Column 1 - Quick Links */}
            <nav className="footer__column" aria-label="Quick Links">
              <h3 className="footer__column-title">Quick Links</h3>
              <ul className="footer__column-list">
                {footerNavLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 2 - Legal */}
            <nav className="footer__column" aria-label="Legal">
              <h3 className="footer__column-title">Legal</h3>
              <ul className="footer__column-list">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3 - Resources */}
            <nav className="footer__column" aria-label="Resources">
              <h3 className="footer__column-title">Resources</h3>
              <ul className="footer__column-list">
                <li>
                  <Link to="/learn-more">Learn More</Link>
                </li>
                <li>
                  <Link to="/impact">Our Impact</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/connect">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} National Waqf Foundation
          </p>
          <div className="footer__bottom-links">
            <Link to="/terms">Terms</Link>
            <Link to="/connect">Contact us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
