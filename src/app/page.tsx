import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contacts App',
  description: 'Contacts App created with Next.js'
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home