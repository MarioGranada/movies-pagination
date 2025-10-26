// import { useContext, useEffect, useState, type FC } from "react";
import { type FC } from "react";

// import customFetch from "../../../helpers/customFetch";
// import MovieContext from "../../../context/MovieContext";
import PosterImage from "../../../components/PosterImage";
import formatDate from "../../../utils/formatDate";
import { Link } from "@tanstack/react-router";
import formatBudget from "../../../utils/formatBudget";
import useMovie from "./hooks/useMovie";
import MoviePlaceholder from "./MoviePlaceholder";

type Props = {
  id: string;
};

const Movie: FC<Props> = ({ id }) => {
  const { config, backdropUrl, posterUrl, movie, isLoading } = useMovie(id);

  if (isLoading) {
    return <MoviePlaceholder />;
  }

  if (!config || !movie) {
    return null;
  }

  const {
    budget,
    genres,
    homepage,
    original_language,
    original_title,
    overview,
    popularity,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
    title,
    vote_average,
    vote_count,
  } = movie;

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
            <p>
              <strong> Original Title: </strong>
              {original_title}
            </p>
            <p className="genres">
              {genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="overview">{overview}</p>
            <div className="movieMeta">
              <p>{Math.ceil(popularity)} users reported watched this movie</p>
              <div className="rating">
                <p className="voteAverage">{vote_average.toFixed(2)}/10</p>
                <p className="voteCount">(Voted by {vote_count} users)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="additionalInfo">
          <div className="infoBlock">
            <p>Budget</p>
            <p>{formatBudget(budget)}</p>
          </div>
          <div className="infoBlock">
            <p>Homepage</p>
            <Link to={homepage} target="_blank" className="homepageLink">
              Visit Website
            </Link>
          </div>

          <div className="infoBlock">
            <p>Original Language</p>
            <p>{original_language.toUpperCase()}</p>
          </div>
          <div className="infoBlock">
            <p>Revenue</p>
            <p>{formatBudget(revenue)} </p>
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
