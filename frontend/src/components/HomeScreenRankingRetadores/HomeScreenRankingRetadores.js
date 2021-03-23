import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HomeScreenRankingRetadoresFigureRetador1Img from "../../assets/images/HomeScreenImages/HomeScreenRankingRetadoresFigureRetador1Img.png";
import HomeScreenRankingRetadoresFigureRetador2Img from "../../assets/images/HomeScreenImages/HomeScreenRankingRetadoresFigureRetador2Img.png";
import "./HomeScreenRankingRetadores.css";

const HomeScreenRankingRetadores = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="HomeScreenRankingRetadoresH2Text">Ranking de retadores</h2>
            <p className="HomeScreenRankingRetadoresVerMasText">Ver más</p>
            <figure className="position-relative HomeScreenRankingRetadoresFigureRetador1">
              <img
                src={HomeScreenRankingRetadoresFigureRetador1Img}
                alt="HomeScreenRankingRetadoresFigureRetador1Img"
                className="HomeScreenRankingRetadoresFigureRetador1Img"
              />
              <figcaption className="HomeScreenRankingRetadoresFigureRetador1NameText">
                Nuria L.
              </figcaption>
              <figcaption className="HomeScreenRankingRetadoresFigureRetador1RecaudacionRetosText">
                Recaudación 1.350 €<br />7 retos
              </figcaption>
            </figure>
            <figure className="position-relative HomeScreenRankingRetadoresFigureRetador2">
              <img
                src={HomeScreenRankingRetadoresFigureRetador2Img}
                alt="HomeScreenRankingRetadoresFigureRetador2Img"
                className="HomeScreenRankingRetadoresFigureRetador2Img"
              />
              <figcaption className="HomeScreenRankingRetadoresFigureRetador2NameText">
                Luis G.
              </figcaption>
              <figcaption className="HomeScreenRankingRetadoresFigureRetador2RecaudacionRetosText">
                Recaudación 1.050 €<br />5 retos
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreenRankingRetadores;
