import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  switchBtn: false,
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setSwitchBtn(state, action) {
      state.switchBtn = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
