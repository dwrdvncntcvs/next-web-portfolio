import Image from "next/image";
import React, { FC, useCallback, useEffect, useState } from "react";
import { customImageLoader } from "utils/helper";
import { ModalOverlay } from "components/Global";
import classes from "./previewImages.module.scss";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import useImageController, { ImageProp } from "hooks/useImageController";

interface PreviewImagesProps {
  isShown: boolean;
  onClose: () => void;
  images: ImageProp[];
}

const PreviewImages: FC<PreviewImagesProps> = ({
  onClose,
  isShown,
  images,
}) => {
  const { navLeft, navRight, navigateLeft, navigateRight, selectedImage } =
    useImageController(images);

  return isShown ? (
    <ModalOverlay onClose={onClose}>
      <div className={classes["preview-image"]}>
        {navLeft ? (
          <button className={classes.left} onClick={navigateLeft}>
            <HiChevronLeft />
          </button>
        ) : null}

        <div className={classes.image}>
          <Image
            src={selectedImage?.image!}
            alt={`image-${selectedImage?.id!}`}
            width={200}
            height={200}
            loader={customImageLoader}
          />
        </div>

        {navRight ? (
          <button className={classes.right} onClick={navigateRight}>
            <HiChevronRight />
          </button>
        ) : null}
      </div>
    </ModalOverlay>
  ) : null;
};

export default PreviewImages;
