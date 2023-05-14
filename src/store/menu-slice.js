import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk("fetchUser", async () => {
  const response = await fetch(
    "https://api.edamam.com/search?q=veg&app_id=d29d40f6&app_key=5b19a6bd355a2ff2a764d0059f30cf7b"
  );
  const responseJson = await response.json();
  // console.log(response);
  return responseJson.hits;
});

const initialState = {
  menuData: [],
  loading: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchMenu.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchMenu.fulfilled]: (state, action) => {
      state.menuData = action.payload;
      state.loading = false;
    },
    [fetchMenu.rejected]: (state, action) => {
      state.loading = false;
      state.menuData = [];
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
