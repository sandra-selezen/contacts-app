'use client'

import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import { signUpSchema } from '@/schemas';
import { ISignUpValues } from '@/types/forms';

const initialValues = {
  name: "",
  email: "",
  password: ""
}

export const SignupForm = () => {
  const handleSubmit = (
    values: ISignUpValues,
    formikHelpers: FormikHelpers<ISignUpValues>
  ) => {
    console.log(values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormControl isRequired>
          <FormLabel htmlFor='name'>Full name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' placeholder='Enter your full name' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Field as={Input} id='email' name='email' type='email' placeholder='Enter your email address' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Field as={Input} id='password' name='password' type='password' placeholder='Enter password' />
        </FormControl>

        <Button type='submit'>Sign up</Button>
      </Form>
    </Formik>
  )
}
