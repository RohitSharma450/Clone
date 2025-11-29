import { configureStore } from "@reduxjs/toolkit";
import collapseReducer from "./slice/sidebarSlice";

export const store = configureStore({
  reducer: {
    collapse: collapseReducer,
  },
});
