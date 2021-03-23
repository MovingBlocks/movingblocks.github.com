import React, { useState } from "react";
import { IconContext } from "react-icons";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FaDownload } from "react-icons/fa";
import "./Header.css";

export default () => {
  const [isOpen, toggle] = useState(false);
  return (
    <Navbar light expand="md" sticky="top">
      <Container>
        <NavbarBrand href="/">Terasology</NavbarBrand>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href="/"
                active={window.location.pathname === "/" ? "true" : null}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/blog"
                active={window.location.pathname === "/blog" ? "true" : null}
              >
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/media"
                active={window.location.pathname === "/media" ? "true" : null}
              >
                Media
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/game"
                active={window.location.pathname === "/game" ? "true" : null}
              >
                The Game
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://forum.terasology.org/">Forum</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/modules"
                active={window.location.pathname === "/modules" ? "true" : null}
              >
                Modules
              </NavLink>
            </NavItem>
            <NavItem className="font-weight-bold btn-primary download-btn">
              <NavLink className="text-white" href="/downloads">
                <IconContext.Provider
                  value={{ size: "1em", className: "download" }}
                >
                  <FaDownload />
                </IconContext.Provider>
                Download
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
