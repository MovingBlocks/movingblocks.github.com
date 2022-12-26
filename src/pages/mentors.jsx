import React from "react";
import Layout from "../layout";
import Mentor from "../components/Mentor/Mentor.jsx";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const mentors = () => (
  <Layout>
    <Mentor />
  </Layout>
);

export default mentors;

export const Head = () => (
  <SEO title={`Mentors | ${config.siteTitle}`} />
);