import React from "react";
import Layout from "../layout";
import Download from "../components/Download/Download";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const download = () => (
  <Layout title="Download">
    <Download />
  </Layout>
);

export default download;

export function Head() {
  return <SEO title={`Download | ${config.siteTitle}`} />;
}
