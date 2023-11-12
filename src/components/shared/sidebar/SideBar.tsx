"use client";

import NextLink from "next/link";
import { Icon, Link, Text, Stack, Button } from "@chakra-ui/react";
import { sideBarLinks } from "@/constants/nav-links";
import { usePathname } from "next/navigation";
import { UserBar } from "@/components/navigations/UserBar";

interface IProps {
  name: string;
}

export const SideBar = ({ name }: IProps) => {
  const pathname = usePathname();
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
        borderRight: "1px solid #1F1F22"
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
      <Button type="button" bg={"light.700"}>Add contact</Button>
      {/* <UserBar name={name} /> */}
    </Stack>
  )
}
