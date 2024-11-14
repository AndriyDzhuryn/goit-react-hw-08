import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';

import { selectLogged } from '../../redux/auth/selectors.js';

import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectLogged);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
