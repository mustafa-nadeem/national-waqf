import './Container.css';

export default function Container({
  children,
  size = 'default',
  padding = true,
  className = '',
  as: Component = 'div',
}) {
  const classNames = [
    'container',
    size && `container--${size}`,
    !padding && 'container--no-padding',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classNames}>
      {children}
    </Component>
  );
}
