import { Header } from "@/components/shared/header/Header";
import { SideBar } from "@/components/shared/sidebar/SideBar";
import { useAuth } from "@/hooks";

const MainLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { user } = useAuth();
  return (
    <>
      <Header name={user.name} />
      <SideBar name={user.name} />
    </>
  )
}

export default MainLayout