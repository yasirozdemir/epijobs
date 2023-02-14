import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CompanyReducer from "../reducers/CompanyReducer";
import FavReducer from "../reducers/FavReducer";
import JobReducer from "../reducers/JobReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  // this brings the whole redux store into persistency
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPTION_KEY,
    }),
  ],
};

const combinedReducers = combineReducers({
  favorites: FavReducer,
  job: JobReducer,
  company: CompanyReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
  reducer: persistedReducer,
  // ...giving back to reducer a single function once again
  // we're telling Redux which reducer function to use!
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      // this shuts off the checking of non-serializable values in actions
    });
  },
});

const persistedStore = persistStore(store);
// a persisted version of our store

export { store, persistedStore };
