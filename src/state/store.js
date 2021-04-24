import { configureStore } from "@reduxjs/toolkit";
import entriesReducer from "./reducers/entriesSlice" 

export default configureStore({
    reducer: {
      entries: entriesReducer,
    },
  })