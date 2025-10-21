const calculateFetchPage = (selectedPage?: number) => {
  if (!selectedPage) {
    return 1;
  }

  return Math.ceil(selectedPage / 2);
};

export default calculateFetchPage;
