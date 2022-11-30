import { useState } from "react";

const useViewImages = (images: any[]) => {
  const transformedImages = images.map((image, i) => ({
    id: i,
    image,
    selected: false,
  }));
  const [imagesArr, setImagesArr] =
    useState<{ id: number; image: string; selected: boolean }[]>(
      transformedImages
    );

  const [isOpened, setIsOpened] = useState(false);

  const selectImage = (index: number) => {
    setImagesArr((prev) =>
      prev.map((image) =>
        image.id === index
          ? { ...image, selected: true }
          : { ...image, selected: false }
      )
    );

    setIsOpened(true);
  };

  const closeAction = () => {
    setIsOpened(false);
  };

  return {
    imagesArr,
    isOpened,
    selectImage,
    closeAction,
  };
};

export default useViewImages;
