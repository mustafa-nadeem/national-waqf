import './SectionHeader.css';

/**
 * SectionHeader Component - Design System
 * 
 * Provides consistent section headings with optional subtitle and description.
 * Use <em> or className="text-emphasis" for editorial emphasis (italics).
 * 
 * Props:
 * - titleParts: Array of strings to create staggered animation
 *   Example: ["What is", "Waqf?"]
 * - animateTitle: Boolean to enable staggered title animation (default: false)
 * - animationDelay: Delay before animation starts (default: 0.1s)
 */
export default function SectionHeader({
  subtitle,
  title,
  titleParts,
  animateTitle = false,
  animationDelay = '0.1s',
  description,
  align = 'center',
  className = '',
}) {
  const classes = [
    'section-header',
    `section-header--${align}`,
    className,
  ].filter(Boolean).join(' ');

  const titleClasses = [
    'section-header__title',
    animateTitle && 'section-header__title--animated',
  ].filter(Boolean).join(' ');

  // Calculate stagger delay based on index
  const calculateDelay = (index) => {
    const initialDelay = parseFloat(animationDelay);
    const staggerGap = 0.2; // 200ms gap between each part
    return `${initialDelay + (index * staggerGap)}s`;
  };

  return (
    <header className={classes}>
      {subtitle && (
        <span className="section-header__subtitle">{subtitle}</span>
      )}
      {title && !titleParts && (
        <h2 className={titleClasses}>{title}</h2>
      )}
      {titleParts && animateTitle ? (
        <h2 className={titleClasses}>
          {titleParts.map((part, index) => (
            <span
              key={index}
              className="section-header__title-part"
              style={{
                animationDelay: calculateDelay(index),
              }}
            >
              {part}
            </span>
          ))}
        </h2>
      ) : titleParts ? (
        <h2 className={titleClasses}>
          {titleParts.join(' ')}
        </h2>
      ) : null}
      {description && (
        <p className="section-header__description">{description}</p>
      )}
    </header>
  );
}
