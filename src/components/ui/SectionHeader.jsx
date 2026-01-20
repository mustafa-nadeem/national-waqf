import './SectionHeader.css';

/**
 * SectionHeader Component - Design System
 * 
 * Provides consistent section headings with optional subtitle and description.
 * Use <em> or className="text-emphasis" for editorial emphasis (italics).
 */
export default function SectionHeader({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const classes = [
    'section-header',
    `section-header--${align}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <header className={classes}>
      {subtitle && (
        <span className="section-header__subtitle">{subtitle}</span>
      )}
      {title && (
        <h2 className="section-header__title">{title}</h2>
      )}
      {description && (
        <p className="section-header__description">{description}</p>
      )}
    </header>
  );
}
