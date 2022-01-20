import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  MinusIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

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
export default function MyResponsiveCarousel({
  images,
  renderLinks,
  loop,
  renderButtons,
  uuid,
}: IProps) {
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
    <div className="carousel-root relative group">
      {renderLinks ? (
        <div className="carousel-links flex flex-row justify-center absolute z-10 text-white bottom-0">
          {images.map((url, index) => (
            <a key={index} href={"#" + (uuid || "img-") + index}>
              <MinusIcon className={"h-8 w-8 ml-3"} />
            </a>
          ))}
        </div>
      ) : (
        []
      )}
      {renderButtons ? (
        <div className="carousel-buttons absolute z-10 top-16 sm:top-20 md:top-24 lg:top-28 xl:top-[10rem] 2xl:top-[11rem] w-80 sm:w-96 md:w-[28rem] lg:w-[42rem] xl:w-[48rem] 2xl:w-[56rem] text-white flex justify-between opacity-30 group-hover:opacity-100 group-hover:animate-pulse">
          <a
            href={"#" + (uuid || "img-") + previousIndex}
            onClick={handlePreviousImage}
          >
            <ChevronDoubleLeftIcon className="h-10 lg:h-20 ml-3" />
          </a>
          <a
            href={"#" + (uuid || "img-") + nextIndex}
            onClick={handleNextImage}
          >
            <ChevronDoubleRightIcon className="h-10 lg:h-20 mr-3" />
          </a>
        </div>
      ) : (
        []
      )}
      <div className="hidden-scrollbar relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl  flex snap-x overflow-x-auto scroll-smooth border-2 border-black">
        {images.map((url, index) => (
          <div
            key={index}
            id={(uuid || "img-") + index}
            className="snap-center"
          >
            <img
              className="aspect-video max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl shadow-xl bg-white"
              src={url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
