import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class GamePage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Home | ${config.siteTitle}`} />
        </div>
      </Layout>
    );
  }
}

export default GamePage;
