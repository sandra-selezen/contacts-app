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
      name: "Log In",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        const authData = {
          email,
          password
        }

        try {
          const response = await axios.post("/auth/login", authData);
          console.log(response.data);
          setAuthHeader(response.data.token);
          return response.data;
        } catch (error: any) {
          throw new Error(error.response.data.message);
        }
      }
    }),
  ],
  pages: {
    signIn: "/login"
  }
}