import Image from "next/image";
import React, { FC, useCallback, useEffect, useState } from "react";
import { customImageLoader } from "../../../utils/helper";
import { ModalOverlay } from "../../Global";
import classes from "./previewImages.module.scss";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface ImageProp {
  image: string;
  id: number;
  selected: boolean;
}

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
  const [selectedImage, setSelectedImage] = useState<ImageProp>();
  const [navLeft, setNavLeft] = useState(true);
  const [navRight, setNavRight] = useState(true);

  const navigateImage = useCallback(
    (image: ImageProp) => {
      setNavLeft(images.indexOf(image) > 0 ? true : false);
      setNavRight(images.indexOf(image) < images.length - 1 ? true : false);
    },
    [images]
  );

  useEffect(() => {
    const image = images.filter((image) => image.selected)[0];
    setSelectedImage(image);
    navigateImage(image);
  }, [images, navigateImage]);

  const navigateLeft = () => {
    const image = images.filter(
      (image) => image.id === selectedImage?.id! - 1
    )[0];
    setSelectedImage(image);
    navigateImage(image);
  };

  const navigateRight = () => {
    const image = images.filter(
      (image) => image.id === selectedImage?.id! + 1
    )[0];
    setSelectedImage(image);
    navigateImage(image);
  };

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
