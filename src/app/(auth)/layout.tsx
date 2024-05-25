import { Box, Container } from "@chakra-ui/react";
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
    <Box as="main">
      <Container pt={'40px'} pb={'40px'}>
        {children}
      </Container>
    </Box>
  )
}

export default AuthLayout;
