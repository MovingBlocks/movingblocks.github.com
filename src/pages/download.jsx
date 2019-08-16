import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

export default () => (
  <Layout>
    <div className="about-container">
      <Helmet title={`Download | ${config.siteTitle}`} />
    </div>
  </Layout>
);
