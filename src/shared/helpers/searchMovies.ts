import customFetch from "./customFetch";

const searchMovies = async (
  query: QueryParams = {},
  abortController: AbortController
) => {
  const baseUrl = "https://api.themoviedb.org/3/search/movie";

  const options = {
    signal: abortController.signal,
  };

  const data = await customFetch(baseUrl, query, options);

  return data;
};

export default searchMovies;
