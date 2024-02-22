import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer, { JWT_PERSISTENT_STATE } from "./user.slice";
import { saveState } from "./storage";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// user LS
store.subscribe(() => {
  saveState({ user: store.getState().user }, JWT_PERSISTENT_STATE);
});

// здесь дока и purple совпадают!)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
