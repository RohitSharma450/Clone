import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import collapseReducer from "./slice/sidebarSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    collapse: collapseReducer,
  },
});
