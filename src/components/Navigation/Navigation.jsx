import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { selectLogged } from '../../redux/auth/selectors.js';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectLogged);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.navWrapper}>
      <div className={css.logoWrapper}>
        <Link to="/">
          <svg
            fill="#000000"
            height="40px"
            width="40px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 484.6 484.6"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <path d="M407.1,442c0,7.8-6.4,14.2-14.2,14.2H64.3c-7.8,0-14.2-6.4-14.2-14.2v-5.8H356c15.6,0,28.3-12.7,28.3-28.3V28.3 C384.3,12.6,371.6,0,356,0H50.1C34.5,0,21.8,12.7,21.8,28.3v379.6c0,0.1,0,0.1,0,0.2v34c0,23.4,19.1,42.5,42.5,42.5h328.6 c23.4,0,42.5-19.1,42.5-42.5v-58.9h-28.3L407.1,442L407.1,442z M102.1,149.4c0.6-7.7,3.5-14.3,9.2-19.7 c6.1-5.8,11.9-11.9,17.9-17.9c7.9-7.7,17.7-7.7,25.6,0c4.9,4.8,9.7,9.6,14.5,14.5c4.7,4.7,9.4,9.4,14.1,14.1 c8.2,8.3,8.2,18,0,26.2c-5.9,5.9-11.7,11.9-17.7,17.6c-1.6,1.5-1.7,2.8-0.9,4.7c3.9,9.5,9.6,17.8,16,25.7 c12.9,15.8,27.4,29.9,44.8,40.8c3.7,2.3,7.8,4,11.7,6.1c2,1.1,3.4,0.7,5-0.9c5.9-6.1,11.9-12,17.9-17.9c7.8-7.8,17.7-7.8,25.6,0 c9.6,9.5,19.2,19.1,28.8,28.8c8,8.1,7.9,17.9-0.1,26.1c-5.4,5.5-11.2,10.7-16.3,16.5c-7.5,8.4-16.9,11.1-27.6,10.5 c-15.6-0.9-30-6-43.9-12.8c-30.9-15-57.2-35.8-79.3-62c-16.3-19.4-29.8-40.6-38.7-64.4C104.2,173.7,101.2,161.9,102.1,149.4z"></path>{' '}
                  <path d="M445.8,160.1H408v83.1h37.8c9.4,0,17-7.6,17-17v-49.1C462.8,167.7,455.2,160.1,445.8,160.1z"></path>{' '}
                  <path d="M445.8,270.6H408v83.1h37.8c9.4,0,17-7.6,17-17v-49.1C462.8,278.2,455.2,270.6,445.8,270.6z"></path>{' '}
                  <path d="M445.8,49.6H408v83.1h37.8c9.4,0,17-7.6,17-17V66.6C462.8,57.2,455.2,49.6,445.8,49.6z"></path>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        </Link>
      </div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
