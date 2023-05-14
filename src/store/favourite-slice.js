import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favCount: 0,
};

const favSlice = createSlice({
  name: "fav",
  initialState: initialState,
  reducers: {
    addFavourite(state) {
      state.favCount = state.favCount + 1;
    },
    removeFavourite(state) {
      state.favCount = state.favCount - 1;
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice.reducer;
