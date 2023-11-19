import type { NextAuthOptions, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { API_BASE_URL } from "@/constants/apiBaseUrl";

axios.defaults.baseURL = API_BASE_URL;

// Utility to add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const options: NextAuthOptions  = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      id: "auth-signup",
      name: "Auth Sign up",
      credentials: {},
      async authorize(credentials) {
        console.log("register", credentials);
        const { name, email, password } = credentials;

        const authData = {
          name,
          email,
          password
        }

        try {
          const response = await axios.post("/auth/register", authData);
          return response.data;
        } catch (error: any) {
          throw new Error(error.message);
        }
      }
    }),
    CredentialsProvider({
      id: "auth-login",
      name: "Auth Log In",
      credentials: {},
      async authorize(credentials) {
        console.log("login", credentials);
        const { email, password } = credentials;

        const authData = {
          email,
          password
        }

        try {
          const response = await axios.post("/auth/login", authData);
          setAuthHeader(response.data.token);
          return response.data;
        } catch (error: any) {
          throw new Error(error.message);
        }
      }
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/signup"
  }
}