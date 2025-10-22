import type { FC } from "react";

type Props = {
  id: string;
};

const MovieDetails: FC<Props> = ({ id }) => {
  return <div>Movie Details Component for {id}</div>;
};

export default MovieDetails;
