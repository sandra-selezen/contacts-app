import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiLoginBoxLine } from "react-icons/ri";

interface IProps {
  name: string;
}

export const UserMenu = ({ name }: IProps) => {
  return (
    <HStack>
      <Avatar size={'sm'} name={name} src="" />
      <Text>{name}</Text>
      <IconButton
        aria-label="Log out"
        backgroundColor={"transparent"}
        color={"inherit"}
        fontSize={"20px"}
        icon={<RiLoginBoxLine />}
        _hover={{
          backgroundColor: "dark.700"
        }}
      />
    </HStack>
  )
}
