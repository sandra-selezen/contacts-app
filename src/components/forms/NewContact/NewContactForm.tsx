'use client';

import { Field, Form, Formik, FormikHelpers } from "formik";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { INewContactValues } from "@/types/forms";
import { newContactSchema } from "@/schemas";
import { addNewContact } from "@/redux/contacts/operations";
import { useAppDispatch } from "@/hooks/useApps";

const initialValues = {
  name: "",
  phone: ""
}

interface INewContactForm {
  onClose: () => void;
}

export const NewContactForm = ({ onClose }: INewContactForm) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: INewContactValues,
    formikHelpers: FormikHelpers<INewContactValues>
  ) => {
    await dispatch(addNewContact(values)).unwrap();
    formikHelpers.resetForm();
    onClose();
  };
  return (
    <Formik
      initialValues={initialValues}
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

        <Button type='submit' fontWeight={'700'}  _hover={{ color: 'white', backgroundColor: 'primary' }}>Add contact</Button>
      </Form>
    </Formik>
  )
}
