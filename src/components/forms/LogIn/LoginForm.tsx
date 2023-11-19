'use client';

import NextLink from 'next/link';
import { signIn } from 'next-auth/react';
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Button, FormControl, FormLabel, HStack, Input, Text, Link } from "@chakra-ui/react";
import { ILogInValues } from "@/types/forms";
import { logInSchema } from "@/schemas";

const initialValues = {
  email: "",
  password: ""
}

export const LoginForm = () => {
  const handleSubmit = async (
    values: ILogInValues,
    formikHelpers: FormikHelpers<ILogInValues>
  ) => {
    try {
      await signIn("credentials", {
        id: "auth-login",
        ...values,
        redirect: false,
      });
      formikHelpers.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={logInSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Field as={Input} id='email' name='email' type='email' placeholder='Enter your email address' />
        </FormControl>

        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Field as={Input} id='password' name='password' type='password' placeholder='Enter password' />
        </FormControl>

        <HStack justifyContent={'space-between'}>
          <Button type='submit'>Log in</Button>
          <Text>Don&apos;t have an account? <Link as={NextLink} href="/signup">Sign up</Link></Text>
        </HStack>
      </Form>
    </Formik>
  )
}
