import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        NaasHub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/events">
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            Services
          </Nav.Link>
          {/* Add login/logout functionality here */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
