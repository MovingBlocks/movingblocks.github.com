import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Index from "../components/Home/Index"

export default () => (
  <Layout>
    <div className="about-container">
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Index />
    </div>
  </Layout>
);
