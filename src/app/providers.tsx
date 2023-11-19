'use client'

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { theme } from "@/styles/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <SessionProvider>
            {children}
          </SessionProvider>
        </Provider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
