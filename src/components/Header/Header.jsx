import React, { useState } from "react";
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
                    <NavLink>
                      <Link
                        to="/media"
                        className="text-color"
                        activeClassName="active"
                      >
                        Media
                      </Link>
                    </NavLink>

                    <NavLink>
                      <Link
                        to="/modules"
                        className="text-color"
                        activeClassName="active"
                      >
                        Modules
                      </Link>
                    </NavLink>
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
                    <NavLink>
                      <Link
                        to="/mentors"
                        className="text-color"
                        activeClassName="active"
                      >
                        Mentors
                      </Link>
                    </NavLink>
                  </div>
                </NavLink>
              </div>
            </NavItem>
            <NavItem>
              <NavLink>
                <a
                  href="https://terasology.org/AdventureSite/"
                  className="text-color"
                  activeClassName="active"
                >
                  Explore
                </a>
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
      <GithubCorner
        size="70"
        bannerColor="#08a045"
        href="https://github.com/MovingBlocks/Terasology"
      />
    </Navbar>
  );
};

export default Header;
