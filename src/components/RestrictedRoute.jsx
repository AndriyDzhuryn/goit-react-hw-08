import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectLogged } from '../redux/auth/selectors.js';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/contacts',
}) => {
  const isLoggetIn = useSelector(selectLogged);
  return isLoggetIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
