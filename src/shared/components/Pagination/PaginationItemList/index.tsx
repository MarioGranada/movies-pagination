import type { FC } from "react";
import type { PaginationItem } from "../types";
import PaginationItemControl from "./PaginationItemControl";

type Props = {
  paginationItems: PaginationItem[];
  activePage: number;
  handlePageClick: (page: number) => void;
};

const PaginationList: FC<Props> = ({
  paginationItems,
  activePage,
  handlePageClick,
}: Props) => {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
        gap: "4px",
      }}
    >
      {paginationItems.map((item) => (
        <PaginationItemControl
          key={item}
          item={item}
          activePage={activePage}
          handlePageClick={handlePageClick}
        />
      ))}
    </ul>
  );
};

export default PaginationList;
