import type { FC } from "react";
import EmptyPoster from "./EmptyPoster";

type Props = {
  src?: string;
  alt: string;
  isBackdrop?: boolean;
};

const PosterImage: FC<Props> = ({ src, alt, isBackdrop }) => {
  const classNames = `posterImageContainer ${isBackdrop ? "backdrop" : ""}`;
  if (!src) {
    return (
      <div className={classNames}>
        <EmptyPoster alt={alt} />
      </div>
    );
  }
  return (
    <div className={classNames}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};

export default PosterImage;
