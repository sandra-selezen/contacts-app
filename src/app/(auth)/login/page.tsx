import { Heading } from "@chakra-ui/react";
import { LoginForm } from "@/components/forms/LogIn/LoginForm";

const LogInPage = () => {
  return (
    <>
      <Heading as={'h1'} sx={{ fontWeight: 700, marginBottom: '24px' }}>Log in to your account</Heading>
      <LoginForm />
    </>
  )
}

export default LogInPage