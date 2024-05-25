import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, ILoggedUser, ISignedUser } from "@/types/api-data";
import { ILogInValues, ISignUpValues } from "@/types/forms";
import type { RootState } from "../store";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL as string;

// Utility to add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = "";
};

export const register = createAsyncThunk<ISignedUser, ISignUpValues, { rejectValue: IApiError }>(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", credentials);
      return response.data as ISignedUser;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk<ILoggedUser, ILogInValues, { rejectValue: IApiError }>(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", credentials);
      setAuthHeader(response.data.token);
      return response.data as ILoggedUser;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk<void, void, { rejectValue: IApiError }>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/auth/logout");
      clearAuthHeader();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk<ILoggedUser, void, { rejectValue: string | IApiError }>(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setAuthHeader(persistedToken);
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/auth/current");
      return response.data as ILoggedUser;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);