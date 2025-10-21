import type { FC } from "react";
import Input from "../../components/Input";
import MovieList from "../../components/MovieList";
import useRootHook from "./hooks/useRootHook";
import Pagination from "../../components/Pagination";

const Root: FC = () => {
  const { onMovieSearch, onPageChange, shownMovies, totalResults } =
    useRootHook();

  return (
    <>
      <h1>RootPage</h1>
      <Input onSearch={onMovieSearch} />
      <MovieList movies={shownMovies} />
      <Pagination totalResults={totalResults} onPageChange={onPageChange} />
    </>
  );
};

export default Root;
