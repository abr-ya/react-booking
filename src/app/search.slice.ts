import { getDateDaysDiff } from "@/utils/dateHelper";
import { createSlice } from "@reduxjs/toolkit";

export interface ISearcState {
  date1start: string;
  date2end: string;
  daysDiff?: number;
}

const initialState: ISearcState = {
  date1start: "",
  date2end: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDates: (state, action) => {
      state.date1start = action.payload.startDate;
      state.date2end = action.payload.endDate;
      state.daysDiff = getDateDaysDiff(action.payload.endDate, action.payload.startDate);
    },
  },
  extraReducers: () => {},
});

export const { setDates } = searchSlice.actions;
export default searchSlice.reducer;
