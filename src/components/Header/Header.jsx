import React from 'react';
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
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar light expand="md" sticky="top">
        <Container>
          <NavbarBrand href="/">Terasology</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
                <DropdownMenu className="slideIn animate" right>
                  <DropdownItem>
                    <NavLink href="/modules">All</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/modules/gameplay-template">Gameplay Template</NavLink>
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
                <NavLink className="btn btn-primary" href="/download">Download</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
