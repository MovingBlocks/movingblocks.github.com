import React, { useState } from "react";
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

export default () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">Terasology</NavbarBrand>
          <NavbarToggler onClick={() => setOpen(!isOpen)} />
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
                <NavLink href="/game">The Game</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://forum.terasology.org/">Forum</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Modules
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/modules">All</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/modules/gameplay-template">
                      Gameplay Template
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/modules/logic">Logic</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/modules/content">Content</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/download">Download</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
