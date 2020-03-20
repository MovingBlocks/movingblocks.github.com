import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/Contact/Contact";
import config from "../../data/SiteConfig";

export default () => (
  <Layout>
    <div className="about-container">
      <Helmet title={`The Game | ${config.siteTitle}`} />
      <About />
    </div>
  </Layout>
);

