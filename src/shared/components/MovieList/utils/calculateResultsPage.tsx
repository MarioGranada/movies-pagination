const resultsSlice = (results: number[], selectedPage?: number) => {
  if (!selectedPage) {
    return results;
  }

  if (selectedPage % 2 !== 0) {
    return results.slice(0, 10);
  }

  return results.slice(10);
};

export default resultsSlice;
