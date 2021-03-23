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
import barraProgreso from "../assets/barra_donar_reto/Progreso-donar3.png";
import fotoCompartir from "../assets/barra_donar_reto/compartir-donacion.png";

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
      {/* <CheckoutSteps step1 step3 step4 /> */}
      
      <Row className="FondoForms1">
        <Col md={8} >
        <img
        src={barraProgreso}
        alt="barraProgreso"
        style={{
          marginLeft: "24vw",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      ></img>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 style={{marginBottom:'24px'}}>Resumen</h2>
              <strong>Método: </strong>
              {sponsor.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
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
                        <Col style={{marginTop:'16px'}}>
                          <Link to={`/retos/${item.reto}`}><h3 style={{color:'white'}}>{item.titulo}</h3></Link>
                          Objetivo a recaudar: €{item.objetivoRec}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card style={{background:'transparent !important'}}>
            <ListGroup variant="flush" style={{background:'transparent !important'}}> 
              <ListGroup.Item>
                <h3>Donación</h3>
              </ListGroup.Item>
              <ListGroup.Item style={{background:'transparent !important'}}>
                <Row>
                  <Col>Total:</Col>
                  <Col>€{sponsor.cantidadPersonalizada}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item style={{background:'transparent !important'}}>
                <Button
                  type="button"
                  className="btn-block"
                  style={{
                    background:'#FE4A49',
                    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)',
                    borderRadius: '8px',
                    border:'none',
                    height:'44px',
                    fontFamily: 'Oswald',
                    fontSize: '16pt ',
                    fontWeight: '700'}}
                  onClick={handleShow}
                >
                  Siguiente
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h2 style={{color:'#003626', marginBottom:'24px'}}>¡Gracias por apoyar <br></br> este reto!</h2>
                    <p>
                    Con tu aportación de <strong>{sponsor.cantidadPersonalizada}€</strong> no solo consigues motivar al retador, sino que además estás ayudando a combatir la enfermedad de la ELA
                    </p>
                    <img
                    src={fotoCompartir}
                    ></img>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="Secondary-button" onClick={handleClose}>
                      <Link to="/">
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
