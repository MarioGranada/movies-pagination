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

  const posterSize = poster_sizes[3];

  const backdropUrl =
    backdrop_path && `${base_url}${backdropSize}${backdrop_path}`;

  const posterUrl = poster_path && `${base_url}${posterSize}${poster_path}`;

  return (
    <div className="movieContainer">
      <div className="backdropSection">
        <PosterImage src={backdropUrl} alt={original_title} isBackdrop />
      </div>

      <div className="movieDetails">
        <div className="movieData">
          <div className="posterSection">
            <PosterImage src={posterUrl} alt={title} />
          </div>
          <div className="movieInfo">
            <h2 className="movieTitle">{title}</h2>
            <p className="tagline">{tagline}</p>
            <p>Original Title: {original_title}</p>
            <p className="genres">
              {genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="overview">{overview}</p>
            <div className="movieMeta">
              <p>{Math.ceil(popularity)} users reported watched this movie</p>
              <div className="rating">
                <p className="voteAverage">{vote_average.toFixed(2)}/10</p>
                <p className="voteCount">Voted by {vote_count} users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="additionalInfo">
          <div className="infoBlock">
            <p>Budget</p>
            <p>${budget.toLocaleString()}</p>
          </div>
          <Link
            to={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="homepageLink"
          >
            Visit Website
          </Link>
          <div className="infoBlock">
            <p>Original Language</p>
            <p>{original_language.toUpperCase()}</p>
          </div>
          <div className="infoBlock">
            <p>Revenue</p>
            <p>${revenue.toLocaleString()}</p>
          </div>
          <div className="infoBlock">
            <p>Runtime</p>
            <p>{runtime} min</p>
          </div>
          <div className="infoBlock">
            <p>Status</p>
            <p>{status}</p>
          </div>
          <div className="infoBlock">
            <p>Released at</p>
            <p>{formatDate(release_date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
