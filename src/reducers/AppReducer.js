import { createSlice } from "@reduxjs/toolkit";

export const appShake = createSlice({
  name: "shake",
  initialState: {
    shake: null,
    finalize: false,
  },
  reducers: {
    shake: (state) => {
      state.shake = true;
    },
    finishShake: (state) => {
      state.shake = false;
    },
    finalize: (state) => {
      state.finalize = true;
    },
    reset: (state) => {
      state.finalize = false;
      state.shake = null;
    },
  },
});

export const { shake, finishShake, finalize, reset } = appShake.actions;

export const selectCount = (state) => state.shake.shake;

export default appShake.reducer;
