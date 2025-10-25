/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";

type MovieCxt = {
  config: any;
  genres: GenreMap;
};

export const initContextValue: MovieCxt = {
  config: null,
  genres: {},
};

const MovieContext = createContext(initContextValue);

export default MovieContext;
