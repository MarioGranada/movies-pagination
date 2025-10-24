import { type FC } from "react";
import MoviePoster from "./MoviePoster";

type Props = {
  movies?: Movie[];
};

const MovieList: FC<Props> = ({ movies = [] }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <MoviePoster key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
