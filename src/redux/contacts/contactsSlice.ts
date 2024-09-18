import { ActionReducerMapBuilder, AnyAction, createSlice } from "@reduxjs/toolkit";
import { IContactsState } from "@/types/store";
import { addNewContact, deleteContact, getAllContacts, getFavoritesContacts, toggleFavorite, updateContact } from "./operations";

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
    .addCase(getFavoritesContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(addNewContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(updateContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const contact = state.items.find(contact => contact._id === action.payload);
      if (contact) {
        contact.name = action.payload.name;
        contact.phone = action.payload.phone;
      }
    })
    .addCase(toggleFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const contact = state.items.find(contact => contact._id === action.payload);
      if (contact) {
        contact.favorite = action.payload;
      }
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact._id === action.payload.id);
      state.items.splice(index, 1);
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
