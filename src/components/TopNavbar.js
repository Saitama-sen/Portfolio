import React from "react";
import logo from "../logo.png";
import "../index.css";
import { Nav, Navbar, Form, InputGroup } from "react-bootstrap";

export default function TopNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="container-fluid k">
      <Navbar.Brand href="#home" className="ms-4">
        <img src={logo} width="50" height="50" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle className="me-4" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-4">
          <Nav.Link className="me-4" href="#pick">
            Home
          </Nav.Link>
          <Nav.Link className="me-4" href="#suggest">
            Contact
          </Nav.Link>
          <Nav.Link className="me-4" href="#write">
            About Me
          </Nav.Link>
        </Nav>
        <Form className="m-2" data-bs-theme="dark" inline>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Go</InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
