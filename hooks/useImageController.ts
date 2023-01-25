import { useCallback, useEffect, useState } from "react";

export interface ImageProp {
  image: string;
  id: number;
  selected: boolean;
}

const useImageController = (images: ImageProp[]) => {
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

  return {
    selectedImage,
    navLeft,
    navRight,
    navigateLeft,
    navigateRight,
  };
};

export default useImageController;
