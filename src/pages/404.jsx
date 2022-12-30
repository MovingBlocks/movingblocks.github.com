import React from "react";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const error404 = () => (
  <Layout title="404">
    <div className="about-container" />
    <center>
      <h4>No goo to be found on this block...</h4>
    </center>
  </Layout>
);

export default error404;

export function Head() {
  return <title>{`Not Found | ${config.siteTitle}`}</title>;
}
