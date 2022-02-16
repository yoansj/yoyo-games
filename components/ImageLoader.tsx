import React, { HTMLAttributes, useEffect, useState } from "react";

interface IProps extends HTMLAttributes<HTMLImageElement> {
  /**
   * Image source
   */
  src: string;
}

/**
 * Applies a filter and grayscale while the image is loading
 * @param param0 - Image props
 * @returns Image component
 */
export default function ImageLoader({ src, className }: IProps) {
  const imgEl = React.useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [test, setTest] = useState(false);

  const onLoad = () => setLoaded(true);

  /**
   * Why is this there would you ask ?
   * If I refresh a page when an img was already loaded then the onLoad is never called
   * Why is that so ? I don't know.
   * Solution ? Change the src then put the original src
   * So base src is '' then it goes to the original src to ensure that the onLoad is called
   */
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
      className={"transition-all duration-700 " + className + (loaded === false ? " blur-sm" : " blur-none")}
      onLoad={onLoad}
      src={test === false ? "" : src}
      ref={imgEl}
    />
  );
}
