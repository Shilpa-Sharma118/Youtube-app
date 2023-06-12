import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    hideMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, hideMenu } = menuSlice.actions;
export default menuSlice.reducer;
