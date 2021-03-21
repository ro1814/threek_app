import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
  InputGroup,
} from "react-bootstrap";
import { logout } from "../../actions/userActions";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout("/"));
  };

  return (
    <header>
      <Navbar className="Navbar" expand="lg">
        <Container>
          {userInfo ? (
              <NavDropdown title={userInfo.nombre} id='username'>
                <LinkContainer to='/profile' className="danger">
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/'>
                <NavDropdown.Item onClick={logoutHandler}>Cerrar sesión</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
          ) : <LinkContainer to='/login'>
          <Nav.Link><i className="fas fa-user"></i></Nav.Link>
          </LinkContainer>}

          <LinkContainer className="NavbarLinkContainer" to="/">
            <Navbar.Brand>ThreekApp</Navbar.Brand>
          </LinkContainer>

          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="NavbarToggle ml-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.nombre} id="username">
                  <LinkContainer to="/profile" className="danger">
                    <NavDropdown.Item>Perfil</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/">
                    <NavDropdown.Item onClick={logoutHandler}>
                      Cerrar sesión
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer className="NavbarLinkContainer" to="/login">
                  <Nav.Link>Iniciar sesión</Nav.Link>
                </LinkContainer>
              )}
              <Nav.Link className="NavbarLink" href="#Retos">
                Retos
              </Nav.Link>
              <Nav.Link className="NavbarLink" href="#RankingRetadores">
                Ranking retadores
              </Nav.Link>
              <Nav.Link className="NavbarLink" href="#aCausas">
                Causas
              </Nav.Link>
            </Nav>
            <Form inline>
              <InputGroup className="mb-3">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <InputGroup.Append>
                  <Button
                    id="search-button"
                    type="button"
                    className="btn btn-danger"
                    variant="danger"
                  >
                    <i className="fas fa-search"></i>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
