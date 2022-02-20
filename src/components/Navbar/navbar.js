import React from "react";
import { Col, Row, Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./navbar.css";

export default function Navbars() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">Shop all</Nav.Link>
              <Nav.Link href="#">Computer</Nav.Link>
              <Nav.Link href="#">Tablets</Nav.Link>
              <Nav.Link href="#">Drones & Cameras</Nav.Link>
              <Nav.Link href="#">Audio</Nav.Link>
              <Nav.Link href="#">Mobile</Nav.Link>
              <Nav.Link href="#">T.V & Home Cinema</Nav.Link>
              <Nav.Link href="#">Wearable Tech</Nav.Link>
              <Nav.Link href="#">Sale</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
