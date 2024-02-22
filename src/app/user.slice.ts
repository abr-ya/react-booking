import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { loginReguest, registerReguest } from "@/api/api";
import { typedCatchHandler } from "@/utils/rtkHelper";
import { IUserDetails } from "../interfaces/user.interface";
import { loadState } from "./storage";
import { ILoginParams, IAuthResponse, IRegisterParams } from "../interfaces/auth.interface";

export const JWT_PERSISTENT_STATE = "userData";

export interface IUserState {
  token: string | null;
  isAdmin: boolean;
  details: IUserDetails;
  loginErrorMessage?: string;
  registerErrorMessage?: string;
}

const initialUserDetails = { id: "", email: "", username: "" };

const initialState: IUserState = {
  token: loadState(JWT_PERSISTENT_STATE)?.token ?? null,
  isAdmin: loadState(JWT_PERSISTENT_STATE)?.isAdmin ?? false,
  details: loadState(JWT_PERSISTENT_STATE)?.details ?? initialUserDetails,
};

console.log("userInitialState", initialState);

export const login = createAsyncThunk<IAuthResponse, ILoginParams>(
  "user/login",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await loginReguest(params);
      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "user/login");
    }
  },
);

export const register = createAsyncThunk<IAuthResponse, IRegisterParams>(
  "user/register",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await registerReguest(params);
      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "user/register");
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.token = null;
      state.isAdmin = false;
      state.details = initialUserDetails;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (_state, action) => action.payload)
      .addCase(login.rejected, (state, action) => {
        state.loginErrorMessage = action.error.message;
      })
      .addCase(register.fulfilled, (_state, action) => action.payload)
      .addCase(register.rejected, (state, action) => {
        state.registerErrorMessage = action.error.message;
      });
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
