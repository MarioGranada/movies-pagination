import { type FC } from "react";
import usePagination from "./hooks/usePagination";
import PaginationControl from "./PaginationControl";
import PaginationItem from "./PaginationItem";

type Props = {
  totalResults: number;
  itemsPerPage?: number;
  activePage?: number;
  onPageChange?: (page: number) => void;
};

const Pagination: FC<Props> = ({
  totalResults,
  itemsPerPage = 10,
  onPageChange,
}) => {
  const {
    activePage,
    totalPages,
    paginationItems,
    handlePageClick,
    handlePrevious,
    handleNext,
  } = usePagination(totalResults, itemsPerPage, onPageChange);

  if (!totalPages) {
    return null;
  }

  return (
    <ul className="moon-pagination">
      <PaginationControl
        onClick={handlePrevious}
        type="previous"
        disabled={activePage <= 1}
      />
      {paginationItems.map((item) => (
        <PaginationItem
          key={item}
          item={item}
          activePage={activePage}
          handlePageClick={handlePageClick}
        />
      ))}
      <PaginationControl
        onClick={handleNext}
        type="next"
        disabled={activePage >= totalPages}
      />
    </ul>
  );
};

export default Pagination;
