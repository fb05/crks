import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div className="navbar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Dansk System Assurance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Forside
            </Nav.Link>
            <Nav.Link as={Link} to="/ejendom">
              Ejendomsforsikring
            </Nav.Link>
            <Nav.Link as={Link} to="/entreprise"> 
              Entrepriseforsikring
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Om os
            </Nav.Link>
            <Nav.Link as={Link} to="/report">
              Anmeld skade
            </Nav.Link>
            <Nav.Link as={Link} to="/emergency">
              Akutnumre
            </Nav.Link>
            <Nav.Link as={Link} to="/gdpr">
              GDPR
            </Nav.Link>
            <Nav.Link>
            Tlf: 33 79 60 60
            </Nav.Link>
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
