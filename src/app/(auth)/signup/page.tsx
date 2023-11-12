"use client";

import { SignupForm } from "@/components/forms/SignUp/SignupForm"
import { Heading } from "@chakra-ui/react"

const SignUpPage = () => {

  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 700, marginBottom: '24px' }}>Create your account</Heading>
      <SignupForm />
    </>
  )
}

export default SignUpPage
