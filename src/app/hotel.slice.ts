import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getHotelDetailReguest, getHotelsReguest } from "@/api/api";
import { typedCatchHandler } from "@/utils/rtkHelper";
import { IHotel, IHotelSearchParams } from "@/interfaces/hotel.interface";
import { normalizeHotelDetail } from "./normalize";

export interface IHotelState {
  list: IHotel[];
  detail: IHotel | null;
  hotelLoading: boolean;
  hotelErrorMessage?: string;
}

const initialState: IHotelState = {
  list: [],
  detail: null,
  hotelLoading: false,
};

export const getHotels = createAsyncThunk<IHotel[], IHotelSearchParams>(
  "hotel/getList",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await getHotelsReguest(params);
      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "hotel/getList");
    }
  },
);

export const getHotel = createAsyncThunk<IHotel, { id: string }>(
  "hotel/getHotel",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await getHotelDetailReguest(id);
      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "hotel/getHotel");
    }
  },
);

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotels.pending, (state) => {
        state.hotelLoading = true;
      })
      .addCase(getHotels.fulfilled, (state, action) => {
        state.hotelLoading = false;
        state.list = action.payload;
      })
      .addCase(getHotels.rejected, (state, action) => {
        state.hotelLoading = false;
        state.hotelErrorMessage = action.error.message;
      })
      .addCase(getHotel.pending, (state) => {
        state.hotelLoading = true;
      })
      .addCase(getHotel.fulfilled, (state, action) => {
        state.hotelLoading = false;
        state.detail = normalizeHotelDetail(action.payload);
      })
      .addCase(getHotel.rejected, (state, action) => {
        state.hotelLoading = false;
        state.hotelErrorMessage = action.error.message;
      });
  },
});

export default hotelSlice.reducer;
