"use client"
import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { RiLogoutBoxRLine } from "react-icons/ri";

interface IProps {
  name: string;
}

export const UserMenu = ({ name }: IProps) => {
  // const session = useSession();
  // console.log(session);

  return (
    <HStack>
      {/* <Avatar size={'sm'} name={session.data?.user?.name || ""} src={session.data?.user?.image || ""} />
      <Text>{session.data?.user?.name || ""}</Text> */}
      <IconButton
        aria-label="Log out"
        backgroundColor={"transparent"}
        color={"inherit"}
        fontSize={"20px"}
        icon={<RiLogoutBoxRLine />}
        _hover={{
          backgroundColor: "dark.700"
        }}
        onClick={() => signOut({
          callbackUrl: "/"
        })}
      />
    </HStack>
  )
}
