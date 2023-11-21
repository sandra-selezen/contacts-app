'use client'

import NextLink from 'next/link';
import { signIn } from 'next-auth/react';
import axios from "axios";
import { Button, FormControl, FormLabel, HStack, Input, Link, Text } from '@chakra-ui/react';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import { API_BASE_URL } from "@/constants/apiBaseUrl";
import { signUpSchema } from '@/schemas';
import { ISignUpValues } from '@/types/forms';

axios.defaults.baseURL = API_BASE_URL;

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
      const response = await axios.post("/auth/register", values);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      formikHelpers.resetForm();
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
