import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/operations.js';

import css from './LoginForm.module.css';

const INITIAL_VALUES = { email: '', password: '' };

const LoginForm = () => {
  const dispatch = useDispatch();

  const loginUser = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const loginUserSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Field is required'),
    password: Yup.string()
      .required('Password length must be at least 7 characters')
      .min(7, 'Email must be at least 3 characters'),
  });

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={loginUserSchema}
      onSubmit={loginUser}
    >
      <Form className={css.formAddContact}>
        <label className={css.inputDataContacts}>
          <span>Email</span>
          <Field
            className={css.inputEmailContacts}
            type="text"
            name="email"
            placeholder="Enter your email!"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.inputDataContacts}>
          <span>Password</span>
          <Field
            className={css.inputPasswordContacts}
            type="password"
            name="password"
            placeholder="Enter your password!"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.btnSignIn}>
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
