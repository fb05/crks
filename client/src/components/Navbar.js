import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/img/CRKS LOGO.png"


const NavBar = () => {
  return (
    <div className="navbar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/"><h1 className="name"></h1></Navbar.Brand>
        <img src={Logo} alt="Logo" width="80" height="80"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Forside
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Om os
            </Nav.Link>        
            <Nav.Link>
            Tlf: 50 46 28 86
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
};
export default NavBar;
