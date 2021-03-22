import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeScreenDescubreRetos from "../components/HomeScreenDescubreRetos/HomeScreenDescubreRetos";
import { Col, Row, Button } from "react-bootstrap";
import { listRetos } from "../actions/retoActions";
import Investigacion from "../components/Investigacion";
import Message from "../components/Message";
import Loader from "../components/Loader";

const InvestigacionScreen = () => {
  const dispatch = useDispatch();

  const retoList = useSelector((state) => state.retoList);
  const { loading, error, retos } = retoList;

  useEffect(() => {
    dispatch(listRetos());
  }, [dispatch]);

  return (
      <>

      <Investigacion/>
      <h2 style={{ color: "#224E39" }}>Retos que lo apoyan</h2>
      <br/>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        
          
          <Row>
          {retos.map((reto) => (
            <Col key={reto._id} sm={12} md={6} lg={4} xl={3}>
              <HomeScreenDescubreRetos reto={reto} />
            </Col>
          ))}
          {/* <Link to="/#Retos"> */}
                <Button
                  type="submit"
                  variant="light"
                  className="HomeScreenDescubreRetosRetoBtn2 Primary-button"
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

export default InvestigacionScreen;
