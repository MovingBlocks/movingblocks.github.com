import React from "react";
import Layout from "../layout";
import Download from "../components/Download/Download";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const download = () => (
  <Layout>
    <Download />
  </Layout>
);

export default download;

export const Head = () => <SEO title={`Download | ${config.siteTitle}`} />;
