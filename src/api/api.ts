import { IHotelSearchParams } from "@/interfaces/hotel.interface";
import axios from "./axios";
import { ILoginParams, IRegisterParams } from "@/interfaces/auth.interface";
import queryString from "query-string";

export const baseUrl = import.meta.env.VITE_API_URL; // todo: add default?

export const loginReguest = (payload: ILoginParams) => {
  return axios.post(`${baseUrl}auth/login`, payload);
};

export const registerReguest = (payload: IRegisterParams) => {
  return axios.post(`${baseUrl}auth/register`, payload);
};

export const getHotelsReguest = (params: IHotelSearchParams) =>
  axios.get(`${baseUrl}hotels?${queryString.stringify(params)}`);

export const getHotelDetailReguest = (id: string) => axios.get(`${baseUrl}hotels/with-rooms/${id}`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createHotel = (payload: any) => axios.post(`${baseUrl}hotels`, payload);
