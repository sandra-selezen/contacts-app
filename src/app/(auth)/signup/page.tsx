"use client";

import { AbsoluteCenter, Box, Divider, Heading, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { SignupForm } from "@/components/forms/SignUp/SignupForm"
import { GitHubButton } from "@/components/ui/GitHubButton";

const SignUpPage = () => {
  // const session = useSession();
  // if (session.data) redirect("/login");
  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 900, marginBottom: '24px' }}>Create your account</Heading>
      <SignupForm />
      <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg='black' px='4'>
          <Text fontWeight={'700'}>or</Text>
        </AbsoluteCenter>
      </Box>
      <GitHubButton />
    </>
  )
}

export default SignUpPage
