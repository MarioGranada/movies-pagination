import type { FC } from "react";
import type { PaginationItemContent } from "../types";

type Props = {
  item: PaginationItemContent;
  activePage: number;
  handlePageClick: (page: number) => void;
};

const PaginationItem: FC<Props> = ({ item, activePage, handlePageClick }) => {
  if (item === "ell" || item === "ell-1" || item === "ell-2") {
    return (
      <li>
        <span style={{ padding: "8px 12px", color: "#666" }}>...</span>
      </li>
    );
  }

  return (
    <li
      className={`moon-pagination-item ${
        item === activePage ? "moon-pagination-item-active" : ""
      }`}
      onClick={() => handlePageClick(item)}
    >
      {item}
    </li>
  );
};

export default PaginationItem;
