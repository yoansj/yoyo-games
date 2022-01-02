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
export default function MyCarousel({
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
    <div className="carousel-root relative group w-[384px] md:w-[576px] lg:w-[896px]">
      {renderLinks ? (
        <div className="carousel-links flex flex-row justify-center absolute z-10 text-white w-[384px] md:w-[576px] lg:w-[896px] bottom-0">
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
        <div className="carousel-buttons absolute z-10 top-32 lg:top-48 text-white flex justify-between w-[384px] md:w-[576px] lg:w-[896px] opacity-30 group-hover:opacity-100 group-hover:animate-pulse">
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
      <div className="hidden-scrollbar relative w-[384px] md:w-[576px] lg:w-[896px] flex snap-x overflow-x-auto scroll-smooth border-2 border-black">
        {images.map((url, index) => (
          <div
            key={index}
            id={(uuid || "img-") + index}
            className="snap-center shrink-0"
          >
            <img
              className="shrink-0 w-[384px] md:w-[576px] lg:w-[896px] shadow-xl bg-white"
              src={url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
