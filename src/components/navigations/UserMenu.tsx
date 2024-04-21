"use client"

import { useDispatch } from "react-redux";
import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AppDispatch } from "@/redux/store";
import { logout } from "@/redux/auth/operations";

interface IProps {
  name: string;
}

export const UserMenu = ({ name }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <HStack>
      <Avatar size={'sm'} name={name || ""} src={name} />
      <Text>{name || ""}</Text>
      <IconButton
        aria-label="Log out"
        backgroundColor={"transparent"}
        color={"inherit"}
        fontSize={"20px"}
        icon={<RiLogoutBoxRLine />}
        _hover={{
          backgroundColor: "dark.700"
        }}
        onClick={() => dispatch(logout())}
      />
    </HStack>
  )
}
