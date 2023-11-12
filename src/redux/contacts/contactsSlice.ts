import { IContactsState } from "@/types/store";
import { AnyAction, createSlice } from "@reduxjs/toolkit";

const initialState: IContactsState = {
  items: [],
  isLoading: false,
  error: null
}

const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

const isPending = (action: AnyAction) => {
  return action.type.endsWith("pending");
};

const contactsSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const contactsReducer = contactsSlice.reducer;