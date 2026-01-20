import './Placeholder.css';

export default function Placeholder({
  label,
  width,
  height,
  aspectRatio,
  variant = 'default',
  className = '',
}) {
  const style = {
    width: width || '100%',
    height: aspectRatio ? undefined : (height || '200px'),
    aspectRatio: aspectRatio,
  };

  const classNames = [
    'placeholder',
    `placeholder--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} style={style} aria-hidden="true">
      {label && <span className="placeholder__label">{label}</span>}
    </div>
  );
}
