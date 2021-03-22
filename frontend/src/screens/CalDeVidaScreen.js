import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeScreenDescubreRetos from "../components/HomeScreenDescubreRetos/HomeScreenDescubreRetos";
import { Col } from "react-bootstrap";
import { listRetos } from "../actions/retoActions";

const CalDeVidaScreen = () => {
  const dispatch = useDispatch();

  const retoList = useSelector((state) => state.retoList);
  const { retos } = retoList;

  useEffect(() => {
    dispatch(listRetos());
  }, [dispatch]);

  return (
    <>
    <h1>Investigación</h1>
      <div>
        {retos.map((reto) => (
          <Col key={reto._id} sm={12} md={6} lg={4} xl={3}>
            <HomeScreenDescubreRetos reto={reto} />
          </Col>
        ))}
      </div>
    </>
  );
};

export default CalDeVidaScreen;
