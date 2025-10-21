import type { FC } from "react";
import type { PaginationItem } from "../../types";

type Props = {
  item: PaginationItem;
  activePage: number;
  handlePageClick: (page: number) => void;
};

const PaginationItemControl: FC<Props> = ({
  item,
  activePage,
  handlePageClick,
}) => {
  if (item === "ell" || item === "ell-1" || item === "ell-2") {
    return (
      <li key={item}>
        <span style={{ padding: "8px 12px", color: "#666" }}>...</span>
      </li>
    );
  }

  return (
    <li key={item}>
      <button
        onClick={() => handlePageClick(item)}
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          backgroundColor: item === activePage ? "#007bff" : "white",
          color: item === activePage ? "white" : "black",
          cursor: "pointer",
          minWidth: "40px",
        }}
      >
        {item}
      </button>
    </li>
  );
};

export default PaginationItemControl;
