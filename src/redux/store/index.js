import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favReducer from "../reducers/FavReducer";
import JobReducer from "../reducers/JobReducer";

const store = configureStore({
  reducer: combineReducers({
    favorites: favReducer,
    job: JobReducer,
  }),
});

export default store;
