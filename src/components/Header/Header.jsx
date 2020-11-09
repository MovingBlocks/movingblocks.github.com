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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaDownload } from "react-icons/fa";

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
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/media">Media</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AdventureSite">Explore</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/game">The Game</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://forum.terasology.org/">Forum</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/modules">Modules</NavLink>
            </NavItem>
            <NavItem className="download-btn">
              <NavLink
                className="btn btn-primary btn-download"
                href="https://github.com/MovingBlocks/TerasologyLauncher/releases/latest/download/TerasologyLauncher.zip"
              >
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
