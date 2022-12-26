import React from "react";
import Layout from "../layout";
import Media from "../components/Media/Media";
import config from "../../data/SiteConfig";

const media = () => (
  <Layout>
    <div className="media-container">
      <Media />
    </div>
  </Layout>
);

export default media;

export const Head = () => (
  <>
    <title>{`Media | ${config.siteTitle}`}</title>
  </>
);
