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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                The Game
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link
                    to="/media"
                    className="text-color"
                    activeClassName="active"
                  >
                    Media
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    to="/modules"
                    className="text-color"
                    activeClassName="active"
                  >
                    Modules
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link
                    to="/game"
                    className="text-color"
                    activeClassName="active"
                  >
                    The Game
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    to="/mentors"
                    className="text-color"
                    activeClassName="active"
                  >
                    Mentors
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    to="/gsoc_tsoc"
                    className="text-color"
                    activeClassName="active"
                  >
                    GSoC & TSoC
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Explore
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link
                    to="https://terasology.org/AdventureSite/"
                    className="text-color"
                    activeClassName="active"
                  >
                    Adventure Site
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    to="https://forum.terasology.org/"
                    className="text-color"
                    activeClassName="active"
                  >
                    Forum
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    to="https://github.com/Terasology"
                    className="text-color"
                    activeClassName="active"
                  >
                    Github
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem className="ml-4 font-weight-bold btn-primary download-btn">
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
