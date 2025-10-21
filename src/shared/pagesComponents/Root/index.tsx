import type { FC } from "react";
import Input from "../../components/Input";
import MovieList from "../../components/MovieList";
import useRootHook from "./hooks/useRootHook";

const Root: FC = () => {
  const { onMovieSearch, movies } = useRootHook();

  return (
    <>
      <h1>RootPage</h1>
      <Input onSearch={onMovieSearch} />
      <MovieList movies={movies} />
    </>
  );
};

export default Root;
