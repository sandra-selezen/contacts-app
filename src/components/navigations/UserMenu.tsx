import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiLoginBoxLine } from "react-icons/ri";

export const UserMenu = () => {
  return (
    <HStack>
      <Avatar size={'sm'} name="Sandra" src="" />
      <Text>Sandra</Text>
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
