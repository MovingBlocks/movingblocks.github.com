import React, { useState, useMemo } from "react";
import { IconContext } from "react-icons";
import GithubCorner from "react-github-corner";
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

function Header() {
  const [isOpen, toggle] = useState(false);
  const downloadIconAttributes = useMemo(
    () => ({ size: "1em", className: "download" }),
    []
  );
  return (
    <Navbar color="light" light expand="lg" sticky="top">
      <Container>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <NavbarBrand className="mx-auto">
          <Link to="/">
            <img src={navLogo} alt="Terasology" width="225" />
          </Link>
        </NavbarBrand>
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
              <NavLink>
                <Link
                  to="/gallery"
                  className="text-color"
                  activeClassName="active"
                >
                  Gallery
                </Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-color">
                <span className="text-color">Modules</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/modules/a"
                      className="text-color"
                      activeClassName="active"
                    >
                      Browse all
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/modules/search"
                      className="text-color"
                      activeClassName="active"
                    >
                      Search
                    </Link>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-color">
                <span className="text-color">Contribute</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/contribute"
                      className="text-color"
                      activeClassName="active"
                    >
                      Getting Started
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/programs"
                      className="text-color"
                      activeClassName="active"
                    >
                      Contributor Programs
                    </Link>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Link to="/downloads">
              <NavItem className="font-weight-bold btn-primary download-btn">
                <NavLink className="text-white">
                  <IconContext.Provider value={downloadIconAttributes}>
                    <FaDownload />
                  </IconContext.Provider>
                  Download
                </NavLink>
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Container>
      <GithubCorner
        size={65}
        bannerColor="#08a045"
        href="https://github.com/MovingBlocks/Terasology"
      />
    </Navbar>
  );
}

export default Header;
