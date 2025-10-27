/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from "react";
import { Link } from "@tanstack/react-router";
import PosterImage from "../../PosterImage";
import formatDate from "../../../utils/formatDate";
import { useSelector } from "react-redux";

type Props = {
  movie: Movie;
};

const MoviePoster: FC<Props> = ({ movie }) => {
  const { config, genres } = useSelector((state: any) => state.config);

  if (!config) {
    return null;
  }

  const { images } = config;
  const { base_url, poster_sizes } = images;
  const posterSize = poster_sizes[3];
  const {
    title,
    genre_ids,
    popularity,
    release_date,
    vote_average,
    vote_count,
    overview,
    poster_path,
  } = movie;

  const posterUrl = poster_path && `${base_url}${posterSize}${poster_path}`;

  const genresList = genre_ids.length
    ? genre_ids.map((genre_id) => genres[genre_id]).join(", ")
    : "No data";

  return (
    <li className="moviePoster">
      <Link to={`/movies/${movie.id}`}>
        <PosterImage src={posterUrl} alt={title} />
        <div className="movieDetails">
          <h3 className="movieTitle">{title}</h3>
          <div className="movieMeta">
            <p className="genres">{genresList}</p>
            <p>{overview}</p>
            <p>Watched by {Math.ceil(popularity)} users</p>
            <p className="releaseDate">
              Released at: {formatDate(release_date)}
            </p>
            <div className="rating">
              <p className="voteAverage">{vote_average.toFixed(2)}/10</p>
              <p className="voteCount">(Voted by {vote_count} users)</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MoviePoster;
