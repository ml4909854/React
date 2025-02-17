import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/slice.js"; // Ensure correct path

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
