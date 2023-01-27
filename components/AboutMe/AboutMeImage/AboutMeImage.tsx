import Image from "next/image";
import React, { FC } from "react";
import { customImageLoader } from "utils/helper";
import classes from "./aboutMeImage.module.scss";

interface AboutMeImageProps {
  imageUrl: string;
  name: string;
}

const AboutMeImage: FC<AboutMeImageProps> = ({ imageUrl, name }) => {
  const divCount = [1, 2];

  return (
    <div className={classes["image-container"]}>
      {divCount.map((num) => (
        <div key={num.toString()}></div>
      ))}
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={400}
        loader={customImageLoader}
      />
    </div>
  );
};

export default AboutMeImage;
