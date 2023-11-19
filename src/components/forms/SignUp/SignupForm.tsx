'use client'

import NextLink from 'next/link';
import { signIn } from 'next-auth/react';
import { Button, FormControl, FormLabel, HStack, Input, Link, Text } from '@chakra-ui/react';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import { signUpSchema } from '@/schemas';
import { ISignUpValues } from '@/types/forms';

const initialValues = {
  name: "",
  email: "",
  password: ""
}

export const SignupForm = () => {
  const handleSubmit = async (
    values: ISignUpValues,
    formikHelpers: FormikHelpers<ISignUpValues>
  ) => {
    try {
      await signIn("credentials", {
        id: "auth-signup",
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
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='name'>Full name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' placeholder='Enter your full name' />
        </FormControl>

        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Field as={Input} id='email' name='email' type='email' placeholder='Enter your email address' />
        </FormControl>

        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Field as={Input} id='password' name='password' type='password' placeholder='Enter password' />
        </FormControl>

        <HStack justifyContent={'space-between'}>
          <Button type='submit'>Sign up</Button>
          <Text>Have an account? <Link as={NextLink} href="/login">Log in now</Link></Text>
        </HStack>
      </Form>
    </Formik>
  )
}
