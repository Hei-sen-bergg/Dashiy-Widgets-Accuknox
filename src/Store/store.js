import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./widgetControl";

export const store = configureStore({
  reducer: {
    widgets: widgetReducer,
  },
});
