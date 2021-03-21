import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listRetos } from "../actions/retoActions";
import HomeScreenCrearReto from "../components/HomeScreenCrearReto/HomeScreenCrearReto";
import HomeScreenFuncionaThreek from "../components/HomeScreenFuncionaThreek/HomeScreenFuncionaThreek";
import HomeScreenRankingRetadores from "../components/HomeScreenRankingRetadores/HomeScreenRankingRetadores";
import HomeScreenDescubreRetos from "../components/HomeScreenDescubreRetos/HomeScreenDescubreRetos";

const HomeScreen = () => { 
  const dispatch = useDispatch();

  const retoList = useSelector((state) => state.retoList);
  const { loading, error, retos } = retoList;

  useEffect(() => {
    dispatch(listRetos());
  }, [dispatch]);

  return (
    <>
      {/* //! HOME 1: Tienes 3 semanas para superarte */}
      <HomeScreenCrearReto />
      {/* //! HOME 2: ¿Cómo funciona threek? */}
      <HomeScreenFuncionaThreek />
      {/* //! HOME 3: Ranking de retadores */}
      <HomeScreenRankingRetadores />
      {/* //! HOME 4: Descubre todos los retos */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <h2 className="HomeScreenDescubreRetosH2Text">Descubre todos los retos</h2>
          <p className="HomeScreenDescubreRetosVerMasText">Ver más</p>
          {retos.map((reto) => (
            <Col key={reto._id} sm={12} md={6} lg={4} xl={3}>
              <HomeScreenDescubreRetos reto={reto} />
            </Col>
          ))}
          {/* <Link to="/#Retos"> */}
                <Button
                  type="submit"
                  variant="light"
                  className="HomeScreenDescubreRetosRetoBtn2"
                >
                  <figcaption className="HomeScreenDescubreRetosRetoBtn2Text">
                  Ver todos
                  </figcaption>
                </Button>
              {/* </Link> */}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
