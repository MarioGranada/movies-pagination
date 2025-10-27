import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import loadingReducer from "./isLoadingSlice";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    config: configReducer,
    loading: loadingReducer,
    movies: moviesReducer,
  },
});

export default store;
