import React from "react";
import urljoin from "url-join";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

function SEO({ title, description, pathname, children }) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: urljoin(siteUrl, pathname || ""),
    image: urljoin(siteUrl, image),
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter.url" content={seo.url} />
      {children}
    </>
  );
}

export default SEO;
