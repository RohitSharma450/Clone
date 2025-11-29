import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "collapse",
  initialState: {
    hidden: true,
  },
  reducers: {
    setCollapse(state, action) {
      state.hidden = action.payload;
    },
  },
});

export const { setCollapse } = sidebarSlice.actions;
export default sidebarSlice.reducer;
