import React from "react";
import { Container } from "reactstrap";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.scss";
import favicon from "../../static/logos/logo.png";

// eslint-disable-next-line no-unused-vars
function Layout({ title, children }) {
  return (
    <body>
      <Header />
      <Container className="main">
        <div className="mb-4">
          <h1 className="text-center">{title}</h1>
          <div className="title-underline" />
        </div>
        {children}
      </Container>
      <Footer />
    </body>
  );
}

export default Layout;

export function Head() {
  return (
    <>
      <meta name="description" content={config.siteDescription} />
      <link rel="shortcut icon" href={favicon} type="image/png" />
    </>
  );
}
