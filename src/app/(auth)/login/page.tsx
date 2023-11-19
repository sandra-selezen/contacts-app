"use client";

import { AbsoluteCenter, Box, Divider, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/forms/LogIn/LoginForm";
import { GitHubButton } from "@/components/ui/GitHubButton";

const LogInPage = () => {
  const session = useSession();
  if (session.data) redirect("/contacts");
  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 700, marginBottom: '24px' }}>Log in to your account</Heading>
      <LoginForm />
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

export default LogInPage