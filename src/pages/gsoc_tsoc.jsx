import React from "react";
import Layout from "../layout";
import GsocTsoc from "../components/GsocTsoc/GsocTsoc";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const gsoc_tsoc = () => (
  <Layout>
    <GsocTsoc />
  </Layout>
);

export default gsoc_tsoc;

export const Head = () => (
  <SEO title={`Student Programs | ${config.siteTitle}`} />
);
