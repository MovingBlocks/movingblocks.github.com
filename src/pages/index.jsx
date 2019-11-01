import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Index from "../components/Home/Index"

export default () => (
  <Layout>
    <div className="about-container">
      <Helmet title={`Home | ${config.siteTitle}`} />
      <h1>Welcome To Terasology</h1>
      <Index
        videoSrcURL="https://www.youtube.com/embed/Wpa2aiadwE8"
        videoTitle="Terasology trailer"
      />
    </div>
  </Layout>
);
