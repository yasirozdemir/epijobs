import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favReducer from "../reducers/FavReducer";
import JobReducer from "../reducers/JobReducer";

const store = configureStore({
  reducer: combineReducers({
    fav: favReducer,
    job: JobReducer,
  }),
});

export default store;
