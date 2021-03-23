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
import { Link } from "gatsby";

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
              <NavLink>
                <Link
                  to="/"
                  style={{ color: "#6c757d" }}
                  activeStyle={{
                    color: "black",
                    borderBottom: "4px solid #08a045",
                  }}
                >
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to="/blog"
                  style={{ color: "#6c757d" }}
                  activeStyle={{
                    color: "black",
                    borderBottom: "4px solid #08a045",
                  }}
                >
                  Blog
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to="/media"
                  style={{ color: "#6c757d" }}
                  activeStyle={{
                    color: "black",
                    borderBottom: "4px solid #08a045",
                  }}
                >
                  Media
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to="/game"
                  style={{ color: "#6c757d" }}
                  activeStyle={{
                    color: "black",
                    borderBottom: "4px solid #08a045",
                  }}
                >
                  The Game
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to="https://forum.terasology.org/"
                  style={{ color: "grey" }}
                  activeStyle={{
                    color: "black",
                    borderBottom: "4px solid #08a045",
                  }}
                >
                  Forum
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to="/modules"
                  style={{ color: "#6c757d" }}
                  activeStyle={{
                    color: "black",
                    borderBottom: "4px solid #08a045",
                  }}
                >
                  Modules
                </Link>
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
