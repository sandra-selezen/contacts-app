'use client'

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import AuthLoader from "@/components/shared/AuthLoader";
import { theme } from "@/styles/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AuthLoader>
              {children}
            </AuthLoader>
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers;
