import { useEffect, useState } from "react";
import { gefGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const newImages = await gefGifs(category);
    setImages(newImages);
    //console.log(newImages);
    setIsLoading(false);
  };

  return {
    images: images,
    isLoading: isLoading,
  };
};
