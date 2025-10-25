import { useEffect, useState, type FC } from "react";
import customFetch from "../../helpers/customFetch";
import MovieContext from ".";

type Props = {
  children: React.ReactNode;
};

const MovieContextWrapper: FC<Props> = ({ children }) => {
  const [moviesConfig, setMoviesConfig] = useState(null);
  const url = "https://api.themoviedb.org/3/configuration";

  useEffect(() => {
    const abortController = new AbortController();
    const options = {
      signal: abortController.signal,
    };

    const fetchConfig = async () => {
      const response = await customFetch(url, undefined, options);
      console.log("in here oe config", { response });
      setMoviesConfig(response);
    };

    fetchConfig();

    return () => {
      abortController.abort();
    };
  }, []);

  return <MovieContext value={moviesConfig}>{children}</MovieContext>;
};

export default MovieContextWrapper;
