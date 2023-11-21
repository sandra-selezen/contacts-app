"use client";

import { AbsoluteCenter, Box, Divider, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { SignupForm } from "@/components/forms/SignUp/SignupForm"
import { GitHubButton } from "@/components/ui/GitHubButton";

const SignUpPage = () => {
  // const session = useSession();
  // if (session.data) redirect("/login");
  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 700, marginBottom: '24px' }}>Create your account</Heading>
      <SignupForm />
      <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg='black' px='4'>
          or
        </AbsoluteCenter>
      </Box>
      <GitHubButton />
    </>
  )
}

export default SignUpPage
