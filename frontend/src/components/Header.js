import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap"
import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector( state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
      dispatch(logout())
    }

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          {userInfo ? (
              <NavDropdown title={userInfo.nombre} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
          ) : <LinkContainer to='/login'>
          <Nav.Link><i className="fas fa-user"></i></Nav.Link>
          </LinkContainer>}
          
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
