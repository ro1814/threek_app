import React from "react";
import { Card, Row, Col, ListGroup, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import homeFirstImg from "../assets/images/homeFirstImg.png";

const CrearReto = () => {
  return (
    <>
      <Row>
        <Col>
            <Container>
              <figure className="homeFirstFigure">
                <img src={homeFirstImg} alt="homeFirstImg" />
                <figcaption className="homeFirstImgText">
                  Tienes
                  <br />
                  3 semanas
                  <br />
                  para superarte
                </figcaption>
                <LinkContainer to="/crearnuevoreto">
                  <Button
                    type="submit"
                    className="homeFirstImgBtn"
                    variant="danger"
                  >
                    <figcaption className="homeFirstImgBtnText">
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

export default CrearReto;
