"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Icon, Link, Text, Stack, Button, useDisclosure } from "@chakra-ui/react";
import { sideBarLinks } from "@/constants/nav-links";
import { UserBar } from "@/components/navigations/UserBar";
import { ContactModal } from "@/components/ui/modals/ContactModal";
import { NewContactForm } from "@/components/forms/NewContact/NewContactForm";

interface IProps {
  name: string;
}

export const SideBar = ({ name }: IProps) => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      as={"section"}
      bg={"dark.900"}
      pt={"28"}
      pb={"5"}
      sx={{
        position: "sticky",
        left: 0,
        top: 0,
        height: "100vh",
        width: "fit-content",
        paddingLeft: "24px",
        paddingRight: "24px",
        overflow: "auto",
        borderRight: "1px solid #1F1F22",
        overflowY: "auto",
        scrollBehavior: "auto",
      }}
    >
      <Stack gap={"6"} px={"6"} mb={"8"} alignItems={{ base: "center", md: "normal" }}>
        {sideBarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (<Link
            className={`${isActive && "activeLink"}`}
            as={NextLink}
            href={link.href}
            key={link.label}
            _hover={{
              textDecoration: "none",
              backgroundColor: "#1F1F22",
            }}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "12px",
              padding: "16px",
              borderRadius: "8px"
            }}
          >
            <Icon as={link.icon} fontSize={"24px"} />
            <Text fontWeight={"700"} hideBelow={"md"}>{link.label}</Text>
          </Link>)
        })}
      </Stack>
      <Button type="button" bg={"light.700"} onClick={onOpen}>Add contact</Button>
      <UserBar name={name} />
      <ContactModal isOpen={isOpen} onClose={onClose} title={'Add new contact'}>
        <NewContactForm onClose={onClose} />
      </ContactModal>
    </Stack>
  )
}
