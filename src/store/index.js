import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu-slice";
import favReducer from "./favourite-slice";
import themeReducer from "./theme-slice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    fav: favReducer,
    theme: themeReducer,
  },
});

export default store;
