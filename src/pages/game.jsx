import React from "react";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const game = () => (
  <Layout>
    <div className="about-container">
      <About />
    </div>
  </Layout>
);

export default game;

export function Head() {
  return <SEO title={`The Game | ${config.siteTitle}`} />
}
