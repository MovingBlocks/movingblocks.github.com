import React from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Index from "../components/Home/Index";

const index = () => (
  <Layout title="Welcome to Terasology">
    <div className="about-container">
      <Index />
    </div>
  </Layout>
);

export default index;

export function Head() {
  return <SEO />;
}
