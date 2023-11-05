import { Header } from "@/components/shared/header/Header"

const MainLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header />
    </>
  )
}

export default MainLayout