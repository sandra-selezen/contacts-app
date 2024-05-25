'use client';

import { Box } from "@chakra-ui/react";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/shared/header/Header";
import { SideBar } from "@/components/shared/sidebar/SideBar";

const MainLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { user } = useAuth();

  return (
    <>
      <Header name={user.name} />
      <Box as="main" sx={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar name={user.name} />
        <Box as="section" sx={{
          display: 'flex',
          flex: '1 1 0%',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          px: '6',
          pb: '10',
          pt: '28',
        }}>
          <Box sx={{ width: '100%', maxWidth: '56rem' }}>{children}</Box>
        </Box>
      </Box>
    </>
  )
}

export default MainLayout;
