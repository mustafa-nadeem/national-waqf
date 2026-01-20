import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button Component - Design System
 * 
 * Variants:
 * - primary (default): Solid Teal
 * - navy: Solid Navy
 * - secondary: Outline
 * - muted: Muted fill
 * - ghost: Text only
 * - donate: Orange (visually dominant)
 * 
 * Sizes: small, medium (default), large
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  to,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  ...props
}) {
  const classes = [
    'button',
    `button--${variant}`,
    size !== 'medium' && `button--${size}`,
    fullWidth && 'button--full',
    className,
  ].filter(Boolean).join(' ');

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  // Button
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
