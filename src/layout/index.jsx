import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import { Container, Row, Col } from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default ({ children }) => {
  return (
    <body>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </body>
  );
};
