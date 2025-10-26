import { useEffect, useState, type FC } from "react";
import customFetch from "../../helpers/customFetch";
import MovieContext, { initContextValue } from ".";

type Props = {
  children: React.ReactNode;
};

const MovieContextWrapper: FC<Props> = ({ children }) => {
  const [moviesConfig, setMoviesConfig] = useState(initContextValue);
  const url = "https://api.themoviedb.org/3/configuration";

  useEffect(() => {
    const abortController = new AbortController();
    const options = {
      signal: abortController.signal,
    };

    const fetchConfig = async () => {
      const response = await customFetch(url, undefined, options);
      setMoviesConfig((prevState) => ({
        ...prevState,
        config: { ...response },
      }));
    };

    const fetchGenres = async () => {
      const genresUrl = "https://api.themoviedb.org/3/genre/movie/list";

      const response = await customFetch(genresUrl, undefined, options);
      const { genres } = response;
      const genresMap: GenreMap = {};

      genres.forEach((genre: Genre) => {
        genresMap[genre.id] = genre.name;
      });

      setMoviesConfig((prevState) => ({
        ...prevState,
        genres: genresMap,
      }));
    };

    fetchConfig();
    fetchGenres();

    return () => {
      abortController.abort();
    };
  }, []);

  return <MovieContext value={moviesConfig}>{children}</MovieContext>;
};

export default MovieContextWrapper;
