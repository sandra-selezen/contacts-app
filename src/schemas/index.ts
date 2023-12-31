import * as yup from 'yup';
import { emailRegExp, nameRegExp } from '@/utils/regexes';

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegExp, 'Name may contain only letters, apostrophe, dash and spaces')
    .min(2, 'Must be at least 2 characters long')
    .required('Name is required'),
  email: yup
    .string()
    .email('Email address must contain an "@" sign')
    .matches(emailRegExp, 'Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Must be at least 7 characters long')
    .required('Password is required'),
});

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email address must contain an "@" sign')
    .matches(emailRegExp, 'Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Must be at least 7 characters long')
    .required('Password is required'),
});

export const newContactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegExp, 'Name may contain only letters, apostrophe, dash and spaces')
    .min(2, 'Must be at least 2 characters long')
    .required('Name is required'),
  phone: yup.string().required('Phone number is required'),
});