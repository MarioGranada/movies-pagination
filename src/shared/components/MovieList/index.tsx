import { type FC } from "react";
import MoviePoster from "./MoviePoster";

import styles from "./MovieList.module.scss";

type Props = {
  movies?: Movie[];
};

const MovieList: FC<Props> = ({ movies = [] }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <ul className={styles.container}>
      {movies.map((movie) => (
        <MoviePoster key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
