import { useContext, useEffect, useState, type FC } from "react";
import customFetch from "../../../helpers/customFetch";
import MovieContext from "../../../context/MovieContext";
import PosterImage from "../../../components/PosterImage";
import formatDate from "../../../utils/formatDate";
import { Link } from "@tanstack/react-router";

type Props = {
  id: string;
};

const Movie: FC<Props> = ({ id }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const MovieCxt = useContext(MovieContext);

  useEffect(() => {
    const abortController = new AbortController();
    const url = `https://api.themoviedb.org/3/movie/${id}`;

    const options = {
      signal: abortController.signal,
    };

    const fetchMovie = async () => {
      const response = await customFetch(url, undefined, options);
      console.log("Movie data:", response);
      setMovie(response);
    };

    fetchMovie();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!MovieCxt.config || !movie) {
    return null;
  }

  const {
    backdrop_path,
    budget,
    genres,
    homepage,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
    title,
    vote_average,
    vote_count,
  } = movie;

  const { config } = MovieCxt;
  const { images } = config;
  const { base_url, poster_sizes, backdrop_sizes } = images;
  const backdropSize = backdrop_sizes.pop();

  const posterSize = poster_sizes[1];

  const backdropUrl =
    backdrop_path && `${base_url}${backdropSize}${backdrop_path}`;

  const posterUrl = poster_path && `${base_url}${posterSize}${poster_path}`;

  return (
    <div>
      <div>
        <PosterImage src={backdropUrl} alt={original_title} isBackdrop />
      </div>

      <div className="movieDetails">
        <PosterImage src={posterUrl} alt={title} />
        <h2 className="movieTitle">{title}</h2>
        <p>Original Title: {original_title}</p>
        <p>{tagline}</p>
        <div className="movieMeta">
          <p className="genres">
            {genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>{overview}</p>
          <p>{Math.ceil(popularity)} users reported watching this movie</p>
          <div className="rating">
            <p className="voteAverage">{vote_average.toFixed(2)}/10</p>
            <p className="voteCount">Voted by {vote_count} users</p>
          </div>
        </div>
        <div>
          Budget: {budget}
          <Link to={homepage} target="_blank" rel="noopener noreferrer">
            Homepage
          </Link>
          Original Language: {original_language}
          Revenue: {revenue}
          Runtime: {runtime}
          Status: {status}
          <p className="releaseDate">Released at: {formatDate(release_date)}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
