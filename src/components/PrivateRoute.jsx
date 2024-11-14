import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectLogged } from '../redux/auth/selectors.js';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggetIn = useSelector(selectLogged);
  return isLoggetIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
