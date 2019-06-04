import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

export default class GamePage extends React.Component {
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
