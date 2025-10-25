import { useContext, type FC } from "react";
import MovieContext from "../../../context/MovieContext";
import PosterImage from "./PosterImage";
import formatDate from "../../../utils/formatDate";

type Props = {
  movie: Movie;
};

const MoviePoster: FC<Props> = ({ movie }) => {
  const MovieCxt = useContext(MovieContext);

  if (!MovieCxt.config) {
    return;
  }

  const { config, genres } = MovieCxt;
  const { images } = config;
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
    overview,
  } = movie;

  const genresList = genre_ids.length
    ? genre_ids.map((genre_id) => genres[genre_id]).join(", ")
    : "No data";

  return (
    <li className="moviePoster">
      <PosterImage src={posterUrl} alt={title} />
      <div className="movieDetails">
        <h3 className="movieTitle">{title}</h3>
        <div className="movieMeta">
          <p className="genres">{genresList}</p>
          <p>{overview}</p>
          <p>{Math.ceil(popularity)} users reported watching this movie</p>
          <p className="releaseDate">Released at: {formatDate(release_date)}</p>
          <div className="rating">
            <p className="voteAverage">{vote_average.toFixed(2)}/10</p>
            <p className="voteCount">Voted by {vote_count} users</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MoviePoster;
