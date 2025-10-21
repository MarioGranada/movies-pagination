const prepareQueryParams = (queryParams?: QueryParams) => {
  const searchParams = new URLSearchParams();

  if (!queryParams) {
    return searchParams;
  }

  Object.entries(queryParams).map(([key, value]) => {
    searchParams.append(key, String(value));
  });
  return searchParams;
};

export default prepareQueryParams;
