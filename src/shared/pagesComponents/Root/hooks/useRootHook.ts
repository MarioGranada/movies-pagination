import { useState } from "react";
import prepareQuery from "../../../utils/prepareQuery";
import searchMovies from "../../../helpers/searchMovies";

const useRootHook = () => {
  const abortController = new AbortController();
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async (
    queryParams: QueryParams,
    abortController: AbortController
  ) => {
    const query = prepareQuery(queryParams);
    const data = await searchMovies(query, abortController);
    setMovies(data.results);
  };

  const onMovieSearch = async (value: string) => {
    if (!value) {
      return;
    }
    await fetchMovies({ query: value, page: 1 }, abortController);
  };

  return {
    movies,
    setMovies,
    onMovieSearch,
    fetchMovies,
    abortController,
  };
};

export default useRootHook;
