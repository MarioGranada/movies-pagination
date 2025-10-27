const prepareUrl = (baseUrl: string, searchParams: URLSearchParams) =>
  `${baseUrl}?${searchParams.toString()}`;

export default prepareUrl;
