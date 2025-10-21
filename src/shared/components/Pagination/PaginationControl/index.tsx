import type { FC } from "react";

type Props = {
  onClick: () => void;
  type: "previous" | "next";
  disabled?: boolean;
  className?: string;
};

const PaginationControl: FC<Props> = ({ onClick, type, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "8px 12px",
        border: "1px solid #ccc",
        backgroundColor: disabled ? "#f5f5f5" : "white",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {type === "previous" ? "<" : ">"}
    </button>
  );
};

export default PaginationControl;
