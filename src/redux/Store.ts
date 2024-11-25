import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
