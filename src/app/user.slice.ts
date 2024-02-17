import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IProfile } from "../interfaces/user.interface";
import { loadState } from "./storage";
import { ILoginParams, ILoginResponse, IRegisterParams } from "../interfaces/auth.interface";

export const JWT_PERSISTENT_STATE = "userData";
export interface IUserState {
  jwt: string | null;
  loginErrorMessage?: string;
  registerErrorMessage?: string;
  profile: IProfile;
}

const API_URL = import.meta.env.VITE_API_URL;

const initialUser = {
  id: "",
  email: "",
  username: "",
};

const initialState: IUserState = {
  jwt: loadState(JWT_PERSISTENT_STATE)?.jwt ?? null,
  profile: initialUser,
};

export const login = createAsyncThunk("user/login", async (params: ILoginParams) => {
  try {
    const { data } = await axios.post<ILoginResponse>(`${API_URL}auth/login`, params);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
});

export const registerUser = createAsyncThunk("user/register", async (params: IRegisterParams) => {
  try {
    const { data } = await axios.post<ILoginResponse>(`${API_URL}auth/register`, params);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.jwt = null;
      state.profile = initialUser;
    },
  },
  extraReducers: (builder) => {
    builder
      // catch "порождает" возможный undefined?
      .addCase(login.fulfilled, (state, action: PayloadAction<ILoginResponse | undefined>) => {
        if (!action.payload) return;
        state.jwt = action.payload.token;
        delete state.loginErrorMessage;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginErrorMessage = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.jwt = action.payload.token;
        delete state.registerErrorMessage;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerErrorMessage = action.error.message;
      });
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
