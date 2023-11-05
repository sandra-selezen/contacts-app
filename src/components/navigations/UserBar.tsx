import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiSettings3Line } from "react-icons/ri";

export const UserBar = () => {
  return (
    <HStack marginTop={"auto"}>
      <Avatar name="Sandra" src="" size={"sm"} />
      <Text>Sandra</Text>
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
