import { ActionReducerMapBuilder, AnyAction, createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "@/types/store";
import { login, logout, refreshUser, register } from "./operations";

const initialState: IAuthState = {
  user: {
    name: "",
    email: "",
  },
  isLoading: false,
  isRefreshing: false,
  isLoggedIn: false,
  error: null,
  token: null,
};

const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

const isPending = (action: AnyAction) => {
  return action.type.endsWith("pending");
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IAuthState>) =>
  builder
    .addCase(register.fulfilled, (state, action) => {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isRefreshing = false;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
      state.token = action.payload.token;
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = {
        name: "",
        email: "",
      };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
      state.token = action.payload.token;
    })
    .addMatcher(isPending, (state) => {
      state.isLoading = true;
      state.isRefreshing = true;
    })
    .addMatcher(isError, (state, action) => {
      state.error = action.payload || "Oops... Something went wrong!";
      state.isLoading = false;
    })
});

export const authReducer = authSlice.reducer;