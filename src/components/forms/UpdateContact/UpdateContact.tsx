'use client';

import React from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik, FormikHelpers } from 'formik';

import { useAppDispatch } from '@/hooks/useApps';
import { updateContact } from '@/redux/contacts/operations';
import { IContact } from '@/types/store';
import { newContactSchema } from '@/schemas';

interface IUpdateContact {
  contact: IContact;
  onClose: () => void;
}

export const UpdateContact = ({ contact, onClose }: IUpdateContact) => {
  const initialValues = {
    name: contact.name,
    phone: contact.phone,
  }
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: IContact,
    formikHelpers: FormikHelpers<IContact>
  ) => {
    await dispatch(updateContact(values));
    formikHelpers.resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validationSchema={newContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' placeholder="Enter contact's name" />
        </FormControl>

        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='phone'>Phone number</FormLabel>
          <Field as={Input} id='phone' name='phone' type='text' placeholder="Enter contact's phone number" />
        </FormControl>

        <Button type='submit' fontWeight={'700'}  _hover={{ color: 'white', backgroundColor: 'primary' }}>Update contact</Button>
      </Form>
    </Formik>
  )
}
