import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import loadingReducer from "./isLoadingSlice";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    config: configReducer,
    isLoading: loadingReducer,
    movies: moviesReducer,
  },
});

export default store;
