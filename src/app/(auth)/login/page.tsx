"use client";

import { AbsoluteCenter, Box, Divider, Heading, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/forms/LogIn/LoginForm";
import { GitHubButton } from "@/components/ui/GitHubButton";

const LogInPage = () => {
  // const session = useSession();
  // if (session.data) redirect("/contacts");
  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 900, marginBottom: '24px' }}>Log in to your account</Heading>
      <LoginForm />
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

export default LogInPage