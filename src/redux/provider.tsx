"use client";

import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </>
  )
}