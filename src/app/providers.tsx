'use client'

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@/styles/theme"
import { ReduxProvider } from "@/redux/provider"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
