import React, { HTMLAttributes, useEffect, useState } from "react";

interface IProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
}

/**
 * Applies a filter and grayscale while the image is loading
 * @param param0
 * @returns
 */
export default function ImageLoader({ src, className }: IProps) {
  const imgEl = React.useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [test, setTest] = useState(false);

  const onLoad = () => setLoaded(true);

  useEffect(() => {
    setTest(true);
  }, []);

  useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener("load", onLoad);
      return () => imgElCurrent.removeEventListener("load", onLoad);
    }
  }, [imgEl]);

  return (
    <img
      className={
        "transition-all duration-500 " +
        className +
        (loaded === false ? " blur-lg grayscale" : " blur-none grayscale-0")
      }
      onLoad={onLoad}
      src={test === false ? "" : src}
      ref={imgEl}
    />
  );
}
