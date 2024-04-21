import { Box } from "@chakra-ui/react";
import { Header } from "@/components/shared/header/Header";
import { SideBar } from "@/components/shared/sidebar/SideBar";

const MainLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header name={'Sandra'} />
      <Box as="main" sx={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar name={'Sandra'} />
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

export default MainLayout