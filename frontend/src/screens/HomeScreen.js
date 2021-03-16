import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Reto from "../components/Reto";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listRetos } from "../actions/retoActions";
import CrearReto from "../components/CrearReto";



const HomeScreen = () => {
  const dispatch = useDispatch()

  const retoList = useSelector((state) => state.retoList);
  const { loading, error, retos } = retoList;

  useEffect(() => {
    dispatch(listRetos());
  }, [dispatch]);

  return (
    <>
      <CrearReto />
      <h1>Descubre retos</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {retos.map((reto) => (
            <Col key={reto._id} sm={12} md={6} lg={4} xl={3}>
            <Reto reto={reto}/>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
