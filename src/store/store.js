import { configureStore } from "@reduxjs/toolkit";
import projectIntakeReducer from "./projectIntakeSlice";
import roomsDetailReducer from "./roomsDetailSlice";
import curtainReducer from "./curtainSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

export const rootReducers = combineReducers({
  project: projectIntakeReducer,
  roomsDetail: roomsDetailReducer,
  curtain: curtainReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
