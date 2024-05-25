'use client'

import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Button, FormControl, FormLabel, HStack, Input, Link, Text, useToast } from '@chakra-ui/react';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import { signUpSchema } from '@/schemas';
import { ISignUpValues } from '@/types/forms';
import { register } from '@/redux/auth/operations';
import { useAppDispatch } from '@/hooks/useApps';

const initialValues = {
  name: "",
  email: "",
  password: ""
}

export const SignupForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (
    values: ISignUpValues,
    formikHelpers: FormikHelpers<ISignUpValues>
  ) => {
    try {
      await dispatch(register(values));
      router.push('/login');
    } catch (error: any) {
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
          <Button type='submit' fontWeight={'700'}  _hover={{ color: 'white', backgroundColor: 'primary' }}>Sign up</Button>
          <Text>Have an account? <Link as={NextLink} href="/login" fontWeight={'700'} _hover={{ textDecoration: 'none', color: 'primary' }}>Log in now</Link></Text>
        </HStack>
      </Form>
    </Formik>
  )
}
