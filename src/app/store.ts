import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import hotelReducer from "./hotel.slice";
import searchReducer from "./search.slice";
import userReducer from "./user.slice";
import { saveState } from "./storage";
import { LOCAL_STORAGE_KEY } from "@/constants";

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    search: searchReducer,
    user: userReducer,
  },
});

// user LS
store.subscribe(() => {
  saveState({ user: store.getState().user }, LOCAL_STORAGE_KEY);
});

// здесь дока и purple совпадают!)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
