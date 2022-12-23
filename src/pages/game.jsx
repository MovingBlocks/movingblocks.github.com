import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

const game = () => (
  <Layout>
    <div className="about-container">
      <Helmet title={`The Game | ${config.siteTitle}`} />
      <About />
    </div>
  </Layout>
);

export default game;
