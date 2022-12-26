import React from "react";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

const game = () => (
  <Layout>
    <div className="about-container">
      <About />
    </div>
  </Layout>
);

export default game;

export const Head = () => (
  <>
    <title>{`The Game | ${config.siteTitle}`}</title>
  </>
);
