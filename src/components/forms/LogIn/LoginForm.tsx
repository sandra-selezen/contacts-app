'use client';

import { Field, Form, Formik, FormikHelpers } from "formik";
import { ILogInValues } from "@/types/forms";
import { logInSchema } from "@/schemas";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const initialValues = {
  email: "",
  password: ""
}

export const LoginForm = () => {
  const handleSubmit = (
    values: ILogInValues,
    formikHelpers: FormikHelpers<ILogInValues>
  ) => {
    console.log(values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={logInSchema}
    onSubmit={handleSubmit}
    >
      <Form>
        <FormControl isRequired>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Field as={Input} id='email' name='email' type='email' placeholder='Enter your email address' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Field as={Input} id='password' name='password' type='password' placeholder='Enter password' />
        </FormControl>

        <Button type='submit'>Log in</Button>
      </Form>
    </Formik>
  )
}
