"use client";

import { Heading } from "@chakra-ui/react";
import { SignupForm } from "@/components/forms/SignUp/SignupForm";

const SignUpPage = () => {
  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 900, marginBottom: '24px' }}>Create your account</Heading>
      <SignupForm />
    </>
  )
}

export default SignUpPage
