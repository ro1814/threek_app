import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import HomeScreenCrearRetoImg from "../../assets/images/HomeScreenImages/HomeScreenHomeCrearRetoImg.png";
import "./HomeScreenCrearReto.css";

const HomeScreenCrearReto = () => {
  return (
    <>
      <Row>
        <Col>
          <Container>
            <figure className="HomeScreenCrearRetoFigure">
              <img src={HomeScreenCrearRetoImg} alt="HomeScreenCrearRetoImg" />
              <figcaption className="HomeScreenCrearRetoImgText">
                Tienes
                <br />
                3 semanas
                <br />
                para superarte
              </figcaption>
              <LinkContainer to="/crearnuevoreto">
                <Button
                  type="submit"
                  className="HomeScreenCrearRetoImgBtn"
                  variant="danger"
                >
                  <figcaption className="HomeScreenCrearRetoImgBtnText">
                    Empieza tu reto ahora
                  </figcaption>
                </Button>
              </LinkContainer>
            </figure>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreenCrearReto;
