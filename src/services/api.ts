import axios from "axios";
import { ISignUpValues } from "@/types/forms";

export const register = async (credentials: ISignUpValues) => {
  try {
    const response = await axios.post("/auth/register", credentials);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};