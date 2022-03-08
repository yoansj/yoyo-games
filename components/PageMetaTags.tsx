import React from "react";

interface IProps {
  /**
   * Title of the page
   */
  title: string;

  /**
   * Name of the content
   */
  contentTitle: string;

  /**
   * Description of the content
   */
  description: string;

  /**
   * Url of the content
   */
  url: string;

  /**
   * Image for the content
   */
  image: string;
}

/**
 * Component that makes it easier to have the meta tags on all pages
 * @param param0 - Props
 * @returns React.Component
 */
export default function PageMetaTags({ title, contentTitle, description, url, image }: IProps) {
  return (
    <React.Fragment>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={contentTitle} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={contentTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={contentTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </React.Fragment>
  );
}
