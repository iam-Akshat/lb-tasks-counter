import { configureStore } from "@reduxjs/toolkit";
import { saveState } from "../localStorage";
import entriesReducer from "./reducers/entriesSlice";
import throttle from "lodash.throttle"
const store = configureStore({
  reducer: {
    entries: entriesReducer,
  },
})
store.subscribe(throttle(()=>{
  saveState(store.getState().entries)
}))
export default store;