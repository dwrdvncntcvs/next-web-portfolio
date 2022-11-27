import Image from "next/image";
import React, { FC } from "react";
import { customImageLoader } from "../../../utils/helper";
import classes from "./projectImages.module.scss";

interface ProjectImagesProps {
  images: string[];
}

const ProjectImages: FC<ProjectImagesProps> = ({ images }) => {
  return (
    <section className={classes.images}>
      <h2>relevant images.</h2>
      <div className={classes.list}>
        {images.map((image, i) => (
          <Image
            src={image}
            alt=""
            key={i}
            width={300}
            height={300}
            loader={customImageLoader}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectImages;
