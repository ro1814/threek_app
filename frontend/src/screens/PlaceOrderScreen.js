import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Modal,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link } from "react-router-dom";

const PlaceOrderScreen = (history) => {
  const sponsor = useSelector((state) => state.sponsor);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Calculate everything here
  sponsor.itemsPrecio = sponsor.sponsorItems.reduce(
    (acc, item) => acc + item.precio * item.qty,
    0
  );

  // const placeOrderHandler = () =>{
  //Aquí va la lógica para hacer el update del reto en recaudado
  // }

  return (
    <>
      <CheckoutSteps step1 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Método de pago</h2>
              <strong>Método: </strong>
              {sponsor.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Reto a esponsorizar:</h2>
              {sponsor.sponsorItems.length === 0 ? (
                <Message>No tienes retos a esponsorizar</Message>
              ) : (
                <ListGroup variant="flush">
                  {sponsor.sponsorItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.imagen}
                            alt={item.titulo}
                            fluid
                            rounded
                          ></Image>
                        </Col>
                        <Col>
                          <Link to={`/retos/${item.reto}`}>{item.titulo}</Link>
                        </Col>
                        <Col>Objetivo a recaudar: €{item.objetivoRec}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Resúmen de esponsor</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>€{sponsor.cantidadPersonalizada}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  onClick={handleShow}
                >
                  Hacer el esponsor
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>¡Confirmación!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    ¡Muchas gracias por donar €{sponsor.cantidadPersonalizada} a
                    la fundación!
                  </Modal.Body>
                  <Modal.Body>
                    ¡Comparte tu donación en las redes sociales!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      <Link to="/" className="visitedLink">
                        Ir a página de inicio
                      </Link>
                    </Button>
                  </Modal.Footer>
                </Modal>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
