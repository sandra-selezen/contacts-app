'use client';

import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Button, FormControl, FormLabel, HStack, Input, Text, Link, useToast } from "@chakra-ui/react";
import { ILogInValues } from "@/types/forms";
import { logInSchema } from "@/schemas";
import { AppDispatch } from '@/redux/store';
import { login } from '@/redux/auth/operations';

const initialValues = {
  email: "",
  password: ""
}

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (
    values: ILogInValues,
    formikHelpers: FormikHelpers<ILogInValues>
  ) => {
    try {
      await dispatch(login(values));
      router.push("/contacts");
    } catch (error) {
      toast({
        title: `${error}`,
        status: 'error',
        position: 'top',
        duration: 3000,
      });
    } finally {
      formikHelpers.resetForm();
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
          <Button type='submit' fontWeight={'700'}  _hover={{ color: 'white', backgroundColor: 'primary' }}>Log in</Button>
          <Text>Don&apos;t have an account? <Link as={NextLink} href="/signup" fontWeight={'700'} _hover={{ textDecoration: 'none', color: 'primary' }}>Sign up</Link></Text>
        </HStack>
      </Form>
    </Formik>
  )
}
