import { useEffect, type FC } from "react";

import customFetch from "../../helpers/customFetch";
import { useDispatch } from "react-redux";
import { addConfig, addGenres } from "../../../store/configSlice";

type Props = {
  children: React.ReactNode;
};

const MovieContextWrapper: FC<Props> = ({ children }) => {
  const url = "https://api.themoviedb.org/3/configuration";

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const options = {
      signal: abortController.signal,
    };

    const fetchConfig = async () => {
      const response = await customFetch(url, undefined, options);

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

      dispatch(addGenres({ genres: genresMap }));
    };

    fetchConfig();
    fetchGenres();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <> {children}</>;
};

export default MovieContextWrapper;
