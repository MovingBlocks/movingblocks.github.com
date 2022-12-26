import React from "react";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Index from "../components/Home/Index";

const index = () => (
  <Layout>
    <div className="about-container">
      <Index />
    </div>
  </Layout>
);

export default index;

export const Head = () => (
  <>
    <title>{`Home | ${config.siteTitle}`}</title>
  </>
);
