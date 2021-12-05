import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Nom Application</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link href="/login">Sign in</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link href="/register">Sign up</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
