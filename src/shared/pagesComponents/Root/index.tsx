import type { FC } from "react";
import Input from "../../components/Input";
import MovieList from "../../components/MovieList";
import useRootHook from "./hooks/useRootHook";
import Pagination from "../../components/Pagination";

const Root: FC = () => {
  const { onMovieSearch, movies } = useRootHook();

  return (
    <>
      <h1>RootPage</h1>
      <Input onSearch={onMovieSearch} />
      <MovieList movies={movies} />
      <Pagination totalResults={2000} />
    </>
  );
};

export default Root;
