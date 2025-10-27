/* eslint-disable @typescript-eslint/no-explicit-any */
import prepareQueryParams from "../utils/prepareQueryParams";
import prepareUrl from "../utils/prepareUrl";

const customFetch = async (
  baseUrl: string,
  queryParams?: QueryParams,
  options?: any
) => {
  const searchParams = prepareQueryParams(queryParams);
  const url = prepareUrl(baseUrl, searchParams);

  const baseOptions = {
    method: options?.method || "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      ...options?.headers,
    },
    ...options,
  };

  const response = await fetch(url, baseOptions);
  const data = await response.json();

  return data;
};

export default customFetch;
