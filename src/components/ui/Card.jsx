import './Card.css';

/**
 * Card Component - Design System
 * 
 * Variants:
 * - default: Standard card with subtle border
 * - elevated: ONLY for primary actions (Donate form)
 * - muted: For accordions or lists
 * - interactive: Clickable cards
 * 
 * Padding: compact, default, spacious
 */
export default function Card({
  children,
  variant = 'default',
  padding = 'default',
  borderless = false,
  className = '',
  onClick,
  ...props
}) {
  const classes = [
    'card',
    `card--${variant}`,
    padding !== 'default' && `card--${padding}`,
    borderless && 'card--borderless',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
