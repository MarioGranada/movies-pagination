import type { FC } from "react";
import Placeholder from "../../Placeholder";

const MovieListPlaceholder: FC = () => {
  const placeholderList = Array.from({ length: 10 });
  return (
    <ul className="movieGrid">
      {placeholderList.map((_, index) => (
        <li key={index}>
          <Placeholder className="moviePosterPlaceholder" />
        </li>
      ))}
    </ul>
  );
};

export default MovieListPlaceholder;
