'use client';

import { Field, Form, Formik, FormikHelpers } from "formik";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { INewContactValues } from "@/types/forms";
import { newContactSchema } from "@/schemas";

const initialValues = {
  name: "",
  phone: ""
}

export const NewContactForm = () => {
  const handleSubmit = (
    values: INewContactValues,
    formikHelpers: FormikHelpers<INewContactValues>
  ) => {
    console.log(values);
    formikHelpers.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormControl isRequired>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' placeholder="Enter contact's name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor='phone'>Phone number</FormLabel>
          <Field as={Input} id='phone' name='phone' type='text' placeholder="Enter contact's phone number" />
        </FormControl>

        <Button type='submit'>Add contact</Button>
      </Form>
    </Formik>
  )
}
