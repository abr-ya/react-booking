import axios from "./axios";
import { ILoginParams } from "@/interfaces/auth.interface";

export const baseUrl = import.meta.env.VITE_API_URL; // todo: add default?

export const loginReguest = (payload: ILoginParams) => {
  return axios.post(`${baseUrl}auth/login`, payload);
};
