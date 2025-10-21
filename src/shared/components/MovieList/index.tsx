import { useEffect, type FC } from "react";

type Props = {
  movies?: Movie[];
};

const MovieList: FC<Props> = ({ movies = [] }) => {
  useEffect(() => {
    const abortController = new AbortController();

    const fetchMovies = async () => {
      const baseUrl = "https://api.themoviedb.org/3/search/movie";

      const queryParams = {
        query: "fast",
        include_adult: false,
        language: "en-US",
        page: 1,
      };

      const searchParams = new URLSearchParams();
      Object.entries(queryParams).map(([key, value]) => {
        searchParams.append(key, String(value));
      });

      const url = `${baseUrl}?${searchParams.toString()}`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        signal: abortController.signal,
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log("in here oe ", { data });
    };

    fetchMovies();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      MovieList
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default MovieList;
