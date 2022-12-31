import React from "react";
import Layout from "../layout";
import StudentPrograms from "../components/StudentPrograms";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const studentPrograms = () => (
  <Layout title="Student Programs">
    <StudentPrograms />
  </Layout>
);

export default studentPrograms;

export function Head() {
  return <SEO title={`Student Programs | ${config.siteTitle}`} />;
}
