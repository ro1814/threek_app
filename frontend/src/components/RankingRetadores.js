import React from "react";
import { Card, Row, Col, Container, Carousel } from "react-bootstrap";
import rankingRetadoresFigureRetador1Img from "../assets/images/rankingRetadoresFigureRetador1Img.png";
import rankingRetadoresFigureRetador2Img from "../assets/images/rankingRetadoresFigureRetador2Img.png";

const RankingRetadores = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="rankingRetadoresH2Text">Ranking de retadores</h2>
            {/* //!El siguiente ver mas igual habra de llevar a /rankingRetadores */}
            <p className="rankingRetadoresVerMasText">Ver más</p>
            <figure className="position-relative rankingRetadoresFigureRetador1">
              <img
                src={rankingRetadoresFigureRetador1Img}
                alt="rankingRetadoresFigureRetador1Img"
                className="rankingRetadoresFigureRetador1Img"
              />
              <figcaption className="rankingRetadoresFigureRetador1NameText">Nuria L.</figcaption>
              <figcaption className="rankingRetadoresFigureRetador1RecaudacionRetosText">
                Recaudación 1.350 €<br />7 retos
              </figcaption>
            </figure>
            <figure className="position-relative rankingRetadoresFigureRetador2">
              <img
                src={rankingRetadoresFigureRetador2Img}
                alt="rankingRetadoresFigureRetador2Img"
                className="rankingRetadoresFigureRetador2Img"
              />
              <figcaption className="rankingRetadoresFigureRetador2NameText">Luis G.</figcaption>
              <figcaption className="rankingRetadoresFigureRetador2RecaudacionRetosText">
                Recaudación 1.050 €<br />5 retos
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RankingRetadores;
