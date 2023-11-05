import NextLink from 'next/link';
import { Box, HStack, Link } from "@chakra-ui/react";
import { UserMenu } from '@/components/navigations/UserMenu';

export const Header = () => {
  return (
    <Box
      as="header"
      px={"6"}
      py={"3"}
      bg={"dark.900"}
    >
      <HStack as={'nav'} justifyContent={"space-between"}>
        <Link as={NextLink} href="/">PhoneBook</Link>
        <UserMenu />
      </HStack>
    </Box>
  )
}
