import { useContext, useEffect, useState } from "react";
import MovieContext from "../../../../context/MovieContext";
import customFetch from "../../../../helpers/customFetch";

const useMovie = (id: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const MovieCxt = useContext(MovieContext);

  useEffect(() => {
    const abortController = new AbortController();
    const url = `https://api.themoviedb.org/3/movie/${id}`;

    const options = {
      signal: abortController.signal,
    };

    const fetchMovie = async () => {
      setIsLoading(true);
      const response = await customFetch(url, undefined, options);
      setMovie(response);
      setIsLoading(false);
    };

    fetchMovie();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!MovieCxt.config || !movie) {
    return {
      config: MovieCxt.config,
      movie,
    };
  }

  const { backdrop_path, poster_path } = movie;

  const { config } = MovieCxt;
  const { images } = config;
  const { base_url, poster_sizes, backdrop_sizes } = images;
  const backdropSize = backdrop_sizes.at(-2);

  const posterSize = poster_sizes[3];

  const backdropUrl =
    backdrop_path && `${base_url}${backdropSize}${backdrop_path}`;

  const posterUrl = poster_path && `${base_url}${posterSize}${poster_path}`;

  return {
    config: MovieCxt.config,
    movie,
    backdropUrl,
    posterUrl,
    isLoading,
  };
};

export default useMovie;
