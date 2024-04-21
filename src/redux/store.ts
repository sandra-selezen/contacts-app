import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//   serializableCheck: false,
// }),
//   devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;