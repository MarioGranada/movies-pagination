import { createSlice } from "@reduxjs/toolkit";

const initialState: MovieCxt = {
  config: null,
  genres: {},
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    addConfig: (state, action) => {
      state.config = action.payload;
    },
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { addConfig, addGenres } = configSlice.actions;

const configReducer = configSlice.reducer;

export default configReducer;
