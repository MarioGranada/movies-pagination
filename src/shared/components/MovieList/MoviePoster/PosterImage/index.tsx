import type { FC } from "react";

type Props = {
  src: string;
  alt: string;
};

const PosterImage: FC<Props> = ({ src, alt }) => {
  if (!src) {
    return (
      <div className="posterImageContainer">
        <img src="/placeholder.png" alt={alt} />
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
