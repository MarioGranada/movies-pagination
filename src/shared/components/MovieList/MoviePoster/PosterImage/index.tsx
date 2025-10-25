import type { FC } from "react";
import EmptyPoster from "../../EmptyPoster";

type Props = {
  src?: string;
  alt: string;
};

const PosterImage: FC<Props> = ({ src, alt }) => {
  if (!src) {
    return (
      <div className="posterImageContainer">
        <EmptyPoster alt={alt} />
      </div>
    );
  }
  return (
    <div className="posterImageContainer">
      <img src={src} alt={alt} />
    </div>
  );
};

export default PosterImage;
