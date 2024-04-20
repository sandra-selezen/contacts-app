"use client"

import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { RiSettings3Line } from "react-icons/ri";

interface IProps {
  name: string;
}

export const UserBar = ({ name }: IProps) => {
  // const session = useSession();

  return (
    <HStack marginTop={"auto"}>
      {/* <Avatar name={session.data?.user?.name || ""} src={session.data?.user?.image || ""} size={"sm"} />
      <Text>{session.data?.user?.name || ""}</Text> */}
      <IconButton
        aria-label="Open user profile"
        backgroundColor={"transparent"}
        color={"inherit"}
        fontSize={"20px"}
        marginLeft={"auto"}
        _hover={{
          backgroundColor: "dark.700"
        }}
        icon={<RiSettings3Line />}
      />
    </HStack>
  )
}
