import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { register } from '../../redux/auth/operations.js';

import css from './RegistrationForm.module.css';

const INITIAL_VALUES = { name: '', email: '', password: '' };

const RegisterForm = () => {
  const dispatch = useDispatch();

  const registerNewUser = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const registerUserSchema = Yup.object({
    name: Yup.string()
      .required('Field is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less then 20 characters'),
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
      validationSchema={registerUserSchema}
      onSubmit={registerNewUser}
    >
      <Form className={css.formAddContact}>
        <label className={css.inputDataContacts}>
          <span>Name</span>

          <Field
            className={css.inputNameContacts}
            type="text"
            name="name"
            placeholder="Enter your name!"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
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
        <button type="submit" className={css.btnSignUp}>
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
