import NextLink from 'next/link';
import { Box, HStack, Link } from "@chakra-ui/react";
import { UserMenu } from '@/components/navigations/UserMenu';

interface IProps {
  name: string;
}

export const Header = ({ name }: IProps) => {
  return (
    <Box
      as="header"
      position={"fixed"}
      top={"0"}
      zIndex={"30"}
      width={"100%"}
      px={"6"}
      py={"3"}
      bg={"dark.900"}
    >
      <HStack as={'nav'} justifyContent={"space-between"}>
        <Link as={NextLink} href="/">PhoneBook</Link>
        {/* <UserMenu name={name} /> */}
      </HStack>
    </Box>
  )
}
