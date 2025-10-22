import { type FC } from "react";
import styles from "./Pagination.module.scss";
import usePagination from "./hooks/usePagination";
import PaginationControl from "./PaginationControl";
import PaginationList from "./PaginationItemList";

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
    <div className={styles.pagination}>
      <PaginationControl
        onClick={handlePrevious}
        type="previous"
        disabled={activePage <= 1}
      />
      <PaginationList
        paginationItems={paginationItems}
        activePage={activePage}
        handlePageClick={handlePageClick}
      />
      <PaginationControl
        onClick={handleNext}
        type="next"
        disabled={activePage >= totalPages}
      />
    </div>
  );
};

export default Pagination;
