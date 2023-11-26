import { Metadata } from "next";
import { Nunito } from 'next/font/google';
import Providers from "./providers";
import '../styles/global.css';

export const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900']
})

export const metadata: Metadata = {
  title: 'Contacts App',
  description: 'Contacts App created with Next.js'
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
