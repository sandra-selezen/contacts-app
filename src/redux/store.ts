import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import rootReducer, { RootState } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
  serializableCheck: false,
}),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;