import { ActionReducerMapBuilder, AnyAction, createSlice } from "@reduxjs/toolkit";
import { IContactsState } from "@/types/store";
import { addNewContact, getAllContacts } from "./operations";

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
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IContactsState>) =>
  builder
    .addCase(getAllContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(addNewContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addMatcher(isPending, (state) => {
      state.isLoading = true;
    })
    .addMatcher(isError, (state, action) => {
      state.error = action.payload || "Oops... Something went wrong!";
      state.isLoading = false;
    })
});

export const contactsReducer = contactsSlice.reducer;