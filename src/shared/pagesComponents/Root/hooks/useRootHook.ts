import { useState } from "react";
import prepareQuery from "../../../utils/prepareQuery";
import searchMovies from "../../../helpers/searchMovies";
import calculateFetchPage from "../utils/calculateFetchPage";
import getResultsSlice from "../utils/getResultsSlice";

const useRootHook = () => {
  const abortController = new AbortController();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [apiPage, setApiPage] = useState<number>(1);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [movieSearch, setMovieSearch] = useState<string>("");
  const [totalResults, setTotalResults] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const shownMovies = getResultsSlice(movies, selectedPage);
  const totalPages = Math.ceil(totalResults / 10);

  const fetchMovies = async (
    queryParams: QueryParams,
    abortController: AbortController
  ) => {
    const query = prepareQuery(queryParams);
    const data = await searchMovies(query, abortController);

    return data;
  };

  const onMovieSearch = async (value: string) => {
    if (!value) {
      return;
    }

    setIsLoading(true);
    setMovieSearch(value);
    const data = await fetchMovies({ query: value }, abortController);

    setMovies(data.results);
    setTotalResults(data.total_results);
    setIsLoading(false);
  };

  const onPageChange = async (page: number) => {
    if (page === selectedPage) {
      return;
    }

    const pageToFetch = calculateFetchPage(page);

    if (pageToFetch !== apiPage) {
      setIsLoading(true);
      const data = await fetchMovies(
        { query: movieSearch, page: pageToFetch },
        abortController
      );
      setMovies(data.results);
      setApiPage(pageToFetch);
      setIsLoading(false);
    }

    setSelectedPage(page);
  };

  return {
    movies,
    setMovies,
    onMovieSearch,
    fetchMovies,
    abortController,
    onPageChange,
    shownMovies,
    totalResults,
    totalPages,
    movieSearch,
    isLoading,
  };
};

export default useRootHook;
