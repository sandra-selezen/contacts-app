
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
      <SideBar name={'Sandra'} />
    </>
  )
}

export default MainLayout