/* eslint-disable @typescript-eslint/no-explicit-any */
import prepareQuery from "../../../utils/prepareQuery";
import searchMovies from "../../../helpers/searchMovies";
import calculateFetchPage from "../utils/calculateFetchPage";
import getResultsSlice from "../utils/getResultsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setApiPage,
  setMovies,
  setMovieSearch,
  setSelectedPage,
  setTotalResults,
} from "../../../../store/moviesSlice";
import { setLoading } from "../../../../store/isLoadingSlice";

const useRootHook = () => {
  const abortController = new AbortController();

  const dispatch = useDispatch();
  const moviesState = useSelector((state: any) => state.movies);
  const isLoading = useSelector((state: any) => state.isLoading);
  const {
    movieList: movies,
    movieSearch,
    apiPage,
    selectedPage,
    totalResults,
  } = moviesState;

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

    dispatch(setLoading(true));
    dispatch(setMovieSearch(value));
    const data = await fetchMovies({ query: value }, abortController);

    dispatch(setMovies(data.results));
    dispatch(setTotalResults(data.total_results));
    dispatch(setLoading(false));
  };

  const onPageChange = async (page: number) => {
    if (page === selectedPage) {
      return;
    }

    const pageToFetch = calculateFetchPage(page);

    if (pageToFetch !== apiPage) {
      dispatch(setLoading(true));

      const data = await fetchMovies(
        { query: movieSearch, page: pageToFetch },
        abortController
      );
      dispatch(setMovies(data.results));

      dispatch(setApiPage(pageToFetch));
      dispatch(setLoading(false));
    }

    dispatch(setSelectedPage(page));
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
