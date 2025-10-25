import type { FC } from "react";

type Props = {
  src: string;
  alt: string;
};

const PosterImage: FC<Props> = ({ src, alt }) => {
  if (!src) {
    return <img src="/placeholder.png" alt={alt} />;
  }
  return <img src={src} alt={alt} />;
};

export default PosterImage;
