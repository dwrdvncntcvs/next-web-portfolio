import Image from "next/image";
import React, { FC } from "react";
import useViewImages from "hooks/useViewImages";
import { customImageLoader } from "utils/helper";
import { PreviewImages } from "components/Images";
import classes from "./projectImages.module.scss";

interface ProjectImagesProps {
  images: string[];
}

const ProjectImages: FC<ProjectImagesProps> = ({ images }) => {
  const { selectImage, imagesArr, closeAction, isOpened } =
    useViewImages(images);

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
            onClick={selectImage.bind(null, i)}
          />
        ))}
      </div>
      <PreviewImages
        isShown={isOpened}
        onClose={closeAction}
        images={imagesArr}
      />
    </section>
  );
};

export default ProjectImages;
