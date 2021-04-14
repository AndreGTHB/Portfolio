import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <LinkContainer to="service">
          <Nav.Link >Service</Nav.Link>
          </LinkContainer>
          <LinkContainer to="about">
          <Nav.Link>About</Nav.Link>
          </LinkContainer>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
