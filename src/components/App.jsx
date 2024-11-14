import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

import Layout from './Layout/Layout.jsx';
import RestrictedRoute from './RestrictedRoute.jsx';
import PrivateRoute from './PrivateRoute.jsx';

import { refreshUser } from '../redux/auth/operations.js';
import { selectRefreshing } from '../redux/auth/selectors.js';

import css from './App.module.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage.jsx')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() =>
  import('../pages/ContactsPage/ContactsPage.jsx')
);
const NotFoundPage = lazy(() => {
  return import('../pages/NotFoundPage/NotFoundPage.jsx');
});

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <div className={css.loaderWrapper}>
        <Circles
          height="80"
          width="80"
          color="#0000ff"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className={css.appWrapper}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
