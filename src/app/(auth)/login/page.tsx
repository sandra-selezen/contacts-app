"use client";

import { Heading } from "@chakra-ui/react";
import { LoginForm } from "@/components/forms/LogIn/LoginForm";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogInPage = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/contacts");
    }
  }, [isLoggedIn, router]);
  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 700, marginBottom: '24px' }}>Log in to your account</Heading>
      <LoginForm />
    </>
  )
}

export default LogInPage