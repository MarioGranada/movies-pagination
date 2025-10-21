const prepareQuery = (queryParams: QueryParams) => ({
  include_adult: false,
  language: "en-US",
  ...queryParams,
});

export default prepareQuery;
