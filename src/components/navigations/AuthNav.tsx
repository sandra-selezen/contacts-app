import NextLink from 'next/link';
import { Box, Link, Stack } from "@chakra-ui/react";

export const AuthNav = () => {
  return (
    <Stack>
      <Box>
        <Link as={NextLink} href="/signup">Sign up</Link>
      </Box>
      <Box>
        <Link as={NextLink} href="/login">Log in</Link>
      </Box>
    </Stack>
  )
}
