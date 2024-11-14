import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors.js';
import { logout } from '../../redux/auth/operations.js';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.contactWrapper}>
      <p className={css.descriptionHi}>Welcome, {user.name}</p>
      <button
        className={css.btnLogout}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
