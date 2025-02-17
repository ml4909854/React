import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: (state) =>state= 0,
    incrementByAmount: (state, action) => state + action.payload,
  },
});

export const { increment, decrement, reset, incrementByAmount } = countSlice.actions;
export default countSlice.reducer;
