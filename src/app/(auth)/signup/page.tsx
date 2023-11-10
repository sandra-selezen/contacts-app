"use client";

import { SignupForm } from "@/components/forms/SignUp/SignupForm"
import { useAuth } from "@/hooks"
import { Heading } from "@chakra-ui/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignUpPage = () => {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/contacts");
    } else if (user && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router, user]);

  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 700, marginBottom: '24px' }}>Create your account</Heading>
      <SignupForm />
    </>
  )
}

export default SignUpPage
