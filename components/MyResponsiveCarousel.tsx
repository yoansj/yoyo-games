import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, MinusIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import ImageLoader from "./ImageLoader";

interface IProps {
  /**
   * Images for the carousel
   */
  images: Array<string>;

  /**
   * Render links to go to the next image
   */
  renderLinks?: boolean;

  /**
   * Renders buttons to go to the next and previous image
   */
  renderButtons?: boolean;

  /**
   * Go back to the first image when its the last one
   * ! Currently not working
   */
  loop?: boolean;

  /**
   * Id that permits to differentiate carousels, if you have multiple carousels on a page
   * a unique id is needed for each one of them
   */
  uuid?: string;
}

/**
 * My own homemade carousel, has some flaws but should do the trick
 * @param param0
 * @returns
 */
export default function MyResponsiveCarousel({ images, renderLinks, loop, renderButtons, uuid }: IProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    if (imageIndex === 0) {
      setPreviousIndex(images.length - 1);
      setNextIndex(1);
    } else if (imageIndex === images.length - 1) {
      setPreviousIndex(imageIndex - 1);
      setNextIndex(0);
    } else {
      setPreviousIndex(imageIndex - 1);
      setNextIndex(imageIndex + 1);
    }
  }, [imageIndex]);

  const handleNextImage = () => {
    if (imageIndex === images.length - 1) {
      if (loop) setImageIndex(0);
    } else {
      setImageIndex((i) => i + 1);
    }
  };

  const handlePreviousImage = () => {
    if (imageIndex === 0) {
      if (loop) setImageIndex(images.length - 1);
    } else {
      setImageIndex((i) => i - 1);
    }
  };

  return (
    <div className="carousel-root group relative scroll-smooth">
      {renderLinks ? (
        <div className="carousel-links absolute bottom-0 z-10 flex flex-row justify-center text-white">
          {images.map((url, index) => (
            <a key={index} href={"#" + (uuid || "img-") + index}>
              <MinusIcon className={"ml-3 h-8 w-8"} />
            </a>
          ))}
        </div>
      ) : (
        []
      )}
      {renderButtons ? (
        <div className="carousel-buttons absolute top-[calc(50%-20px)] z-10 flex w-80 justify-between text-black opacity-100 sm:w-96 md:w-[28rem] lg:top-[calc(50%-40px)]  lg:w-[42rem]  xl:w-[48rem] 2xl:w-[56rem]">
          <a href={"#" + (uuid || "img-") + previousIndex} onClick={handlePreviousImage}>
            <ChevronDoubleLeftIcon className="ml-3 h-5 rounded-full border border-black bg-white lg:h-10" />
          </a>
          <a href={"#" + (uuid || "img-") + nextIndex} onClick={handleNextImage}>
            <ChevronDoubleRightIcon className="mr-3 h-5 rounded-full border border-black bg-white lg:h-10" />
          </a>
        </div>
      ) : (
        []
      )}
      <div className="hidden-scrollbar relative flex max-w-xs touch-pan-x snap-x overflow-x-auto scroll-smooth border-2  border-black bg-black sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        {images.map((url, index) => (
          <div key={index} id={(uuid || "img-") + index} className="snap-center">
            <ImageLoader
              className="aspect-video max-w-xs bg-white shadow-xl sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
              src={url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
