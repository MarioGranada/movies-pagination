/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import customFetch from "../../../../helpers/customFetch";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../../../../store/isLoadingSlice";
import { setMovie } from "../../../../../store/moviesSlice";

const useMovie = (id: string) => {
  const { movie } = useSelector((state: any) => state.movies);
  const { isLoading } = useSelector((state: any) => state.isLoading);
  const { config } = useSelector((state: any) => state.config);

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const url = `https://api.themoviedb.org/3/movie/${id}`;

    const options = {
      signal: abortController.signal,
    };

    const fetchMovie = async () => {
      dispatch(setIsLoading(true));
      const response = await customFetch(url, undefined, options);

      dispatch(setMovie(response));
      dispatch(setIsLoading(false));
    };

    fetchMovie();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!config || !movie) {
    return {
      config,
      movie,
    };
  }

  const { backdrop_path, poster_path } = movie;

  const { images } = config;
  const { base_url, poster_sizes, backdrop_sizes } = images;
  const backdropSize = backdrop_sizes.at(-2);

  const posterSize = poster_sizes[3];

  const backdropUrl =
    backdrop_path && `${base_url}${backdropSize}${backdrop_path}`;

  const posterUrl = poster_path && `${base_url}${posterSize}${poster_path}`;

  return {
    config,
    movie,
    backdropUrl,
    posterUrl,
    isLoading,
  };
};

export default useMovie;
