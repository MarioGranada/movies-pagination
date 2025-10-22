import type { FC } from "react";

type Props = {
  movie: Movie;
};

const MoviePoster: FC<Props> = ({ movie }) => {
  return <li>{movie.title}</li>;
};

export default MoviePoster;
