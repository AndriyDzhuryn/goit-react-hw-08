import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.authNavWrapper}>
      <NavLink to="/register" className={buildLinkClass}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthNav;
