import { useContext, type FC } from "react";
import MovieContext from "../../../context/MovieContext";
import PosterImage from "./PosterImage";

type Props = {
  movie: Movie;
};

const MoviePoster: FC<Props> = ({ movie }) => {
  const MovieCxt = useContext(MovieContext);

  if (!MovieCxt) {
    return;
  }

  const { images } = MovieCxt;
  const { base_url, poster_sizes } = images;
  const posterSize = poster_sizes[1];
  const posterUrl = `${base_url}${posterSize}${movie.poster_path}`;
  const {
    title,
    genre_ids,
    popularity,
    release_date,
    vote_average,
    vote_count,
  } = movie;

  return (
    <li>
      <PosterImage src={posterUrl} alt={title} />
      {title}
      <p>Genres: {genre_ids.join(", ")}</p>
      <p>Popularity: {popularity}</p>
      <p>Release Date: {release_date}</p>
      <p>Vote Average: {vote_average}</p>
      <p>Vote Count: {vote_count}</p>
    </li>
  );
};

export default MoviePoster;
