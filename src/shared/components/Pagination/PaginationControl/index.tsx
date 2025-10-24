import type { FC } from "react";

type Props = {
  onClick: () => void;
  type: "previous" | "next";
  disabled?: boolean;
  className?: string;
};

const PaginationControl: FC<Props> = ({ onClick, type, disabled }) => {
  return (
    <li
      onClick={onClick}
      className="moon-pagination-control"
      aria-disabled={disabled}
    >
      {type === "previous" ? "<" : ">"}
    </li>
  );
};

export default PaginationControl;
