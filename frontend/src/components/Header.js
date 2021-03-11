import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to='/login'>
        <Nav.Link><i className="fas fa-user"></i></Nav.Link>
        </LinkContainer>
          <LinkContainer to='/'>
            <Navbar.Brand>ThreekApp</Navbar.Brand>
          </LinkContainer>
          
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Retos">Retos</Nav.Link>
            <Nav.Link href="#RankingRetadores">Ranking retadores</Nav.Link>
            <Nav.Link href="#aCausas">Causas</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
