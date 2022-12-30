import React from "react";
import Layout from "../layout";
import GsocTsoc from "../components/GsocTsoc/GsocTsoc";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const gsocTsoc = () => (
  <Layout title="Student Programs">
    <GsocTsoc />
  </Layout>
);

export default gsocTsoc;

export function Head() {
  return <SEO title={`Student Programs | ${config.siteTitle}`} />;
}
