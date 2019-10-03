import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Media from "../components/Media/Media";
import config from "../../data/SiteConfig";

export default () => (
  <Layout>
    <div className="media-container">
      <Helmet title={`Media | ${config.siteTitle}`} />
      <Media />
    </div>
  </Layout>
);
