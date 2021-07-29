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
  DropdownItem,
} from "reactstrap";
import { FaDownload } from "react-icons/fa";
import { Link } from "gatsby";
import navLogo from "../../../static/logos/nav_logo.png";

const Header = () => {
  const [isOpen, toggle] = useState(false);
  return (
    <Navbar light expand="md" sticky="top">
      <Container>
        <NavbarBrand href="/">
          <img src={navLogo} alt="Terasology" width="225" />
        </NavbarBrand>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/" className="text-color" activeClassName="active">
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to="/blog"
                  className="text-color"
                  activeClassName="active"
                >
                  Blog
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <div className="dropdown">
                <NavLink>
                  <Link
                    to="/game"
                    className="text-color"
                    activeClassName="active"
                  >
                    Terasology
                  </Link>
                  <div class="dropdown-content">
                    <Link
                      to="/media"
                      className="text-color"
                      activeClassName="active"
                    >
                      Media
                    </Link>
                    <Link
                      to="/modules"
                      className="text-color"
                      activeClassName="active"
                    >
                      Modules
                    </Link>
                  </div>
                </NavLink>
              </div>
            </NavItem>
            <NavItem>
              <div className="dropdown">
                <NavLink>
                  <Link
                    to="/gsoc_tsoc"
                    className="text-color"
                    activeClassName="active"
                  >
                    GSoC & TSoC
                  </Link>
                  <div class="dropdown-content">
                    <Link
                      to="/mentors"
                      className="text-color"
                      activeClassName="active"
                    >
                      Mentors
                    </Link>
                  </div>
                </NavLink>
              </div>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link
      to="https://terasology.org/AdventureSite/"
      className="text-color"
      activeClassName="active"
    >
      Explore
    </Link>
              </NavLink>
            </NavItem>
            <NavItem></NavItem>
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

export default Header;
