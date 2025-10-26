import type { FC } from "react";
import Input from "../../components/Input";
import MovieList from "../../components/MovieList";
import useRootHook from "./hooks/useRootHook";
import Pagination from "../../components/Pagination";
import styles from "./root.module.scss";

const Root: FC = () => {
  const {
    onMovieSearch,
    onPageChange,
    shownMovies,
    totalResults,
    movieSearch,
    isLoading,
  } = useRootHook();

  return (
    <section className={styles.container}>
      <Input classNames={styles.input} onSearch={onMovieSearch} />
      <MovieList movies={shownMovies} isLoading={isLoading} />
      <Pagination
        key={movieSearch}
        totalResults={totalResults}
        onPageChange={onPageChange}
      />
    </section>
  );
};

export default Root;
