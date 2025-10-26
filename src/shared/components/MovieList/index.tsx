import { type FC } from "react";
import MoviePoster from "./MoviePoster";
import MovieListPlaceholder from "./MovieListPlaceholder";

type Props = {
  movies?: Movie[];
  isLoading?: boolean;
};

const MovieList: FC<Props> = ({ movies = [], isLoading }) => {
  if (isLoading) {
    return <MovieListPlaceholder />;
  }

  if (!movies.length) {
    return null;
  }

  return (
    <ul className="movieGrid">
      {movies.map((movie) => (
        <MoviePoster key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
