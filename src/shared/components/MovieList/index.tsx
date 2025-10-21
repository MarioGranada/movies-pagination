import { type FC } from "react";

type Props = {
  movies?: Movie[];
};

const MovieList: FC<Props> = ({ movies = [] }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
