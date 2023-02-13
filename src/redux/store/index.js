import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CompanyReducer from "../reducers/CompanyReducer";
import FavReducer from "../reducers/FavReducer";
import JobReducer from "../reducers/JobReducer";

const store = configureStore({
  reducer: combineReducers({
    favorites: FavReducer,
    job: JobReducer,
    company: CompanyReducer,
  }),
});

export default store;
