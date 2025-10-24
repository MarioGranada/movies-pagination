import { useState } from "react";
import type { PaginationItemContent } from "../types";

const usePagination = (
  totalResults: number,
  itemsPerPage: number,
  onPageChange?: (page: number) => void
) => {
  const [activePage, setActivePage] = useState<number>(1);
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const generatePaginationItems = (): PaginationItemContent[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (activePage < 6) {
      return [...Array.from({ length: 5 }, (_, i) => i + 1), "ell", totalPages];
    }

    if (activePage > totalPages - 5) {
      return [
        1,
        "ell",
        ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i),
      ];
    }

    return [
      1,
      "ell-1",
      activePage - 1,
      activePage,
      activePage + 1,
      "ell-2",
      totalPages,
    ];
  };

  const handlePageClick = (page: number) => {
    handlePageChange(page);
  };

  const handlePrevious = () => {
    if (activePage <= 1) {
      return;
    }
    handlePageChange(activePage - 1);
  };

  const handleNext = () => {
    if (activePage >= totalPages) {
      return;
    }
    handlePageChange(activePage + 1);
  };

  const handlePageChange = (page: number) => {
    if (page === activePage) {
      return;
    }

    setActivePage(page);
    onPageChange?.(page);
  };

  const paginationItems = generatePaginationItems();

  return {
    activePage,
    totalPages,
    paginationItems,
    handlePageClick,
    handlePrevious,
    handleNext,
  };
};

export default usePagination;
