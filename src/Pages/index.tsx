import { useState, type FC } from "react";
import Input from "../shared/components/Input";
import MovieList from "../shared/components/MovieList";
import searchMovies from "../shared/helpers/searchMovies";

const RootPage: FC = () => {
  const abortController = new AbortController();
  const [movies, setMovies] = useState<Movie[]>([]);

  const onMovieSearch = async (value: string) => {
    if (!value) {
      return;
    }
    await fetchMovies(value, abortController);
  };

  const fetchMovies = async (
    query: string,
    abortController: AbortController
  ) => {
    const data = await searchMovies(query, abortController);
    setMovies(data.results);
  };

  return (
    <>
      <h1>RootPage</h1>
      <Input onSearch={onMovieSearch} />
      <MovieList movies={movies} />
    </>
  );
};

export default RootPage;
