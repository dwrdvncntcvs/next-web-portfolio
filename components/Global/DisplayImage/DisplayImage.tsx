import Image from "next/image";
import React, { FC } from "react";
import scss from "./displayImage.module.scss";

interface DisplayImageProps {
  imageUrl: string;
  name: string;
}

const transformName = (name: string) => {
  if (name.includes("-"))
    return name
      .split("-")
      .map((name) => name.charAt(0).toUpperCase())
      .join("");

  return name.charAt(0).toUpperCase();
};

const DisplayImage: FC<DisplayImageProps> = ({ imageUrl, name }) => {
  return imageUrl ? (
    <Image
      className={scss.image}
      src={imageUrl}
      alt={name}
      width={300}
      height={300}
      loader={({ src, width }) => `${src}w?=${width}`}
    />
  ) : (
    <div className={scss['word-display']}>{transformName(name)}</div>
  );
};

export default DisplayImage;
