import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, IContact } from "@/types/api-data";
import axios from "axios";
import { INewContactValues } from "@/types/forms";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoritesContacts = createAsyncThunk(
  "contscts/getFavoritesContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts/favorites");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk<IContact, INewContactValues, { rejectValue: IApiError }>(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (data: IContact, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${data._id}`, {
        name: data.name,
        phone: data.phone,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "contacts/toggleFavorite",
  async (contactId: string, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}/favorite`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId: string, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
