import React from "react";
import Layout from "../layout";
import Mentor from "../components/Mentor/Mentor";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const mentors = () => (
  <Layout title="Mentors">
    <Mentor />
  </Layout>
);

export default mentors;

export function Head() {
  return <SEO title={`Mentors | ${config.siteTitle}`} />;
}
