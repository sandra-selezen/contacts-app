import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, IContact } from "@/types/api-data";
import axios from "axios";
import { INewContactValues } from "@/types/forms";

axios.defaults.baseURL = process.env.NEXT_API_URL;

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

export const addNewContact = createAsyncThunk<IContact, INewContactValues, { rejectValue: IApiError }>(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", data);
      console.log(response)
      return response.data;
    } catch (error: any) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);