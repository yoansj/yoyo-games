/**
 * Common Meta Tags used across the website
 * @returns
 */
export default function MyMetaTags() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta property="og:site_name" content="Yoyo Games" />
      <meta property="og:type" content="website" />
      <meta name="theme-color" content="#A855F7" />
    </>
  );
}
