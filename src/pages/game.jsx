import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

export default class GamePage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`The Game | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}
