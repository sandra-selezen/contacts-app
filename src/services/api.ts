import axios from "axios";
import { API_BASE_URL } from "@/constants/apiBaseUrl";
import { ISignUpValues } from "@/types/forms";

axios.defaults.baseURL = API_BASE_URL;

export const register = async (credentials: ISignUpValues) => {
  try {
    const response = await axios.post("/auth/register", credentials);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};