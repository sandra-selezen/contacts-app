import { Container } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Authentication'
}

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main>
      <Container pt={'40px'} pb={'40'}>
        {children}
      </Container>
    </main>
  )
}

export default AuthLayout
