const getResultsSlice = (results: Movie[], selectedPage?: number) => {
  if (selectedPage && selectedPage % 2 === 0) {
    return results.slice(10);
  }

  return results.slice(0, 10);
};

export default getResultsSlice;
