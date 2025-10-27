// import { useEffect, useState, type FC } from "react";
import { useEffect, type FC } from "react";

import customFetch from "../../helpers/customFetch";
// import MovieContext, { initContextValue } from ".";
import { useDispatch } from "react-redux";
import { addConfig, addGenres } from "../../../store/configSlice";

type Props = {
  children: React.ReactNode;
};

const MovieContextWrapper: FC<Props> = ({ children }) => {
  // const [moviesConfig, setMoviesConfig] = useState(initContextValue);
  // const url = "https://api.themoviedb.org/3/configuration";

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const options = {
  //     signal: abortController.signal,
  //   };

  //   const fetchConfig = async () => {
  //     const response = await customFetch(url, undefined, options);
  //     setMoviesConfig((prevState) => ({
  //       ...prevState,
  //       config: { ...response },
  //     }));
  //   };

  //   const fetchGenres = async () => {
  //     const genresUrl = "https://api.themoviedb.org/3/genre/movie/list";

  //     const response = await customFetch(genresUrl, undefined, options);
  //     const { genres } = response;
  //     const genresMap: GenreMap = {};

  //     genres.forEach((genre: Genre) => {
  //       genresMap[genre.id] = genre.name;
  //     });

  //     setMoviesConfig((prevState) => ({
  //       ...prevState,
  //       genres: genresMap,
  //     }));
  //   };

  //   fetchConfig();
  //   fetchGenres();

  //   return () => {
  //     abortController.abort();
  //   };
  // }, []);

  // const [moviesConfig, setMoviesConfig] = useState(initContextValue);
  const url = "https://api.themoviedb.org/3/configuration";

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const options = {
      signal: abortController.signal,
    };

    const fetchConfig = async () => {
      const response = await customFetch(url, undefined, options);
      // setMoviesConfig((prevState) => ({
      //   ...prevState,
      //   config: { ...response },
      // }));

      dispatch(addConfig({ ...response }));
    };

    const fetchGenres = async () => {
      const genresUrl = "https://api.themoviedb.org/3/genre/movie/list";

      const response = await customFetch(genresUrl, undefined, options);
      const { genres } = response;
      const genresMap: GenreMap = {};

      genres.forEach((genre: Genre) => {
        genresMap[genre.id] = genre.name;
      });

      // setMoviesConfig((prevState) => ({
      //   ...prevState,
      //   genres: genresMap,
      // }));

      dispatch(addGenres({ genres: genresMap }));
    };

    fetchConfig();
    fetchGenres();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return <MovieContext value={moviesConfig}>{children}</MovieContext>;
  return <> {children}</>;
};

export default MovieContextWrapper;
