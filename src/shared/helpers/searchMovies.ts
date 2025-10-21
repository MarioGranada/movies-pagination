import customFetch from "./customFetch";

const searchMovies = async (
  query: string,
  abortController: AbortController
) => {
  const baseUrl = "https://api.themoviedb.org/3/search/movie";

  const queryParams = {
    query,
    include_adult: false,
    language: "en-US",
    page: 1,
  };

  const options = {
    signal: abortController.signal,
  };

  const data = await customFetch(baseUrl, queryParams, options);

  return data;
};

export default searchMovies;
