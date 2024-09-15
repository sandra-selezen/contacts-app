"use client"

import { useDispatch } from "react-redux";
import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiLogoutBoxRLine } from "@remixicon/react";

import { logout } from "@/redux/auth/operations";
import { useAppDispatch } from "@/hooks/useApps";

interface IProps {
  name: string;
}

export const UserMenu = ({ name }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <HStack>
      <Avatar size={'sm'} name={name || ""} src={name} />
      <Text>{name || ""}</Text>
      <IconButton
        aria-label="Log out"
        backgroundColor={"transparent"}
        color={"inherit"}
        fontSize={"20px"}
        icon={<RiLogoutBoxRLine size="1.5rem" />}
        _hover={{
          backgroundColor: "dark.700"
        }}
        onClick={() => dispatch(logout())}
      />
    </HStack>
  )
}
