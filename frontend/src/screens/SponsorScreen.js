import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToSponsor } from "../actions/sponsorActions";

const SponsorScreen = ({ match, history }) => {
  const retoId = match.params.id;
  const dispatch = useDispatch();

  const sponsor = useSelector((state) => state.sponsor);
  const { sponsorItems } = sponsor;

  useEffect(() => {
    if (retoId) {
      dispatch(addToSponsor(retoId));
    }
  }, [dispatch, retoId]);
   
  const checkOutHandler = () =>{
      history.push('/sponsorinfo')
  }
  return (
    <Row>
      <Col md={8}>
        <h1>Sponsoriza el reto</h1>
        {sponsorItems.length === 0 ? (
          <Message>
            {" "}
            No has seleccionado un reto <Link to="/">Regresar</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {sponsorItems.map((item) => (
              <ListGroup.Item key={item.reto}>
                <Row>
                  <Col md={2}>
                    <Image src={item.imagen} alt={item.nombre} fluid rounded></Image>
                  </Col>
                  <Col md={3}>
                      <Link to={`/reto/${item.reto}`}>Titulo: {item.titulo}</Link>
                  </Col>
                  <Col md={2}>
                      Objetivo de recaudación: €{item.objetivoRec}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
          <Card>
              <ListGroup variant='flush'>
                    <Button type="button" className='btn-block' onClick={checkOutHandler}>Continuar</Button>
              </ListGroup>
          </Card>
      </Col>

    </Row>
  );
};

export default SponsorScreen;
