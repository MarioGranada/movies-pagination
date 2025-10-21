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

  const shownMovies = getResultsSlice(movies, selectedPage);
  const totalPages = Math.ceil(totalResults / 10);

  const fetchMovies = async (
    queryParams: QueryParams,
    abortController: AbortController
  ) => {
    const query = prepareQuery(queryParams);
    const data = await searchMovies(query, abortController);

    console.log("in here oe data", { data });

    return data;
  };

  const onMovieSearch = async (value: string) => {
    if (!value) {
      return;
    }
    setMovieSearch(value);
    const data = await fetchMovies({ query: value }, abortController);

    setMovies(data.results);
    setTotalResults(data.total_results);
  };

  const onPageChange = async (page: number) => {
    if (page === selectedPage) {
      return;
    }

    const pageToFetch = calculateFetchPage(page);

    if (pageToFetch !== apiPage) {
      const data = await fetchMovies(
        { query: movieSearch, page: pageToFetch },
        abortController
      );
      setMovies(data.results);
      setApiPage(pageToFetch);
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
  };
};

export default useRootHook;
