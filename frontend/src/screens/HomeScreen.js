import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Reto from "../components/Reto";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listRetos } from "../actions/retoActions";
import CrearReto from "../components/CrearReto";
import FuncionaThreek from "../components/FuncionaThreek";
import RankingRetadores from "../components/RankingRetadores";
import "../index.css";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const retoList = useSelector((state) => state.retoList);
  const { loading, error, retos } = retoList;

  useEffect(() => {
    dispatch(listRetos());
  }, [dispatch]);

  return (
    <>
      {/* //!HOME 1: Tienes 3 semanas para superarte */}
      <CrearReto />
      {/* //!HOME 2: ¿Cómo funciona threek? */}
      <FuncionaThreek />
      {/* //!HOME 3: Ranking de retadores */}
      <RankingRetadores />
      {/* //!HOME 4: Descubre todos los retos */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
          <Row>
            <h2 className="descubreRetosH2Text">Descubre todos los retos</h2>
            <p className="descubreRetosVerMasText">Ver más</p>
            {retos.map((reto) => (
              <Col key={reto._id} sm={12} md={6} lg={4} xl={3}>
                <Reto reto={reto} />
              </Col>
            ))}
          </Row>
      )}
    </>
  );
};

export default HomeScreen;
