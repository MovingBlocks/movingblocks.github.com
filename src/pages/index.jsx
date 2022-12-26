import React from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Index from "../components/Home/Index";

const index = () => (
  <Layout>
    <div className="about-container">
      <Index />
    </div>
  </Layout>
);

export default index;

export const Head = () => <SEO />;
