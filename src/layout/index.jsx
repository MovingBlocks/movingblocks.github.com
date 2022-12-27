import React from "react";
import { Container } from "reactstrap";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.scss";
import favicon from "../../static/logos/logo.png";

// eslint-disable-next-line no-unused-vars
function Layout({ children, location }) {
  return <body>
    <Header />
    <Container className="main">{children}</Container>
    <Footer />
  </body>
}

export default Layout;

export function Head() {
  return <>
    <meta name="description" content={config.siteDescription} />
    <link rel="icon shortcut" href={favicon} type="image/png" />
  </>
}
