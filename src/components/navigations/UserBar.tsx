"use client"

import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiSettings3Line } from "@remixicon/react";

interface IProps {
  name: string;
}

export const UserBar = ({ name }: IProps) => {

  return (
    <HStack marginTop={"auto"}>
      <Avatar name={name} src={name} size={"sm"} />
      <Text>{name}</Text>
      <IconButton
        aria-label="Open user profile"
        backgroundColor={"transparent"}
        color={"inherit"}
        fontSize={"20px"}
        marginLeft={"auto"}
        _hover={{
          backgroundColor: "dark.700"
        }}
        icon={<RiSettings3Line size="1.5rem" />}
      />
    </HStack>
  )
}
