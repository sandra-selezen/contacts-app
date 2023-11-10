'use client'

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import { persistor, store } from "@/redux/store"
import { theme } from "@/styles/theme"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <Provider store={store}>{children}</Provider>
        </PersistGate>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
