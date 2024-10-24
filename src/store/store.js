import { configureStore } from "@reduxjs/toolkit";
import birdReducer from "./birdSlice";

const store = configureStore({
  reducer: {
    birds: birdReducer,
  },
});

export default store;
