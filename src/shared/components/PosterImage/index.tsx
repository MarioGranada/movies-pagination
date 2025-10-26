import type { FC } from "react";
import EmptyPoster from "./EmptyPoster";

type Props = {
  src?: string;
  alt: string;
  isBackdrop?: boolean;
};

const PosterImage: FC<Props> = ({ src, alt, isBackdrop }) => {
  if (!src) {
    return (
      <div className="posterImageContainer">
        <EmptyPoster alt={alt} />
      </div>
    );
  }
  return (
    <div className={`posterImageContainer ${isBackdrop ? "backdrop" : ""}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};

export default PosterImage;
