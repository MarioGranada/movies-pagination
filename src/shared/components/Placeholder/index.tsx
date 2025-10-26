import type { FC } from "react";

type Props = {
  className?: string;
};

const Placeholder: FC<Props> = ({ className }) => {
  return <div className={`moon-placeholder ${className}`}></div>;
};

export default Placeholder;
