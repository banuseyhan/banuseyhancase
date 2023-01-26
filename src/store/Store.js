import { configureStore } from "@reduxjs/toolkit";
import shakeReducer from "../reducers/AppReducer";

export default configureStore({
  reducer: {
    shake: shakeReducer,
  },
});
