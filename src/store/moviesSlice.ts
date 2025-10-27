import { createSlice } from "@reduxjs/toolkit";

type MoviesState = {
  movieList: Movie[];
  movie: Movie | null;
  totalResults?: number;
  selectedPage?: number;
  apiPage?: number;
  movieSearch?: string;
};

const initialState: MoviesState = {
  movieList: [],
  movie: null,
  totalResults: 0,
  selectedPage: 1,
  apiPage: 1,
  movieSearch: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movieList = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
    setApiPage: (state, action) => {
      state.apiPage = action.payload;
    },
    setMovieSearch: (state, action) => {
      state.movieSearch = action.payload;
    },
  },
});

export const {
  setMovies,
  setMovie,
  setTotalResults,
  setSelectedPage,
  setApiPage,
  setMovieSearch,
} = moviesSlice.actions;

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
