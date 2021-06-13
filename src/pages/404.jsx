import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const error404 = () => (
  <Layout>
    <div className="about-container">
      <Helmet title={`Not Found | ${config.siteTitle}`} />
    </div>
    <center>
      <h1>404</h1>
      <h4>This is not the page you are looking for...</h4>
    </center>
  </Layout>
);

export default  error404