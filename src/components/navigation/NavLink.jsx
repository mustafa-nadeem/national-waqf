import { NavLink as RouterNavLink } from 'react-router-dom';
import './NavLink.css';

export default function NavLink({
  to,
  children,
  className = '',
  onClick,
}) {
  const classNames = ({ isActive }) => [
    'nav-link',
    isActive && 'nav-link--active',
    className,
  ].filter(Boolean).join(' ');

  return (
    <RouterNavLink
      to={to}
      className={classNames}
      onClick={onClick}
    >
      {children}
    </RouterNavLink>
  );
}
