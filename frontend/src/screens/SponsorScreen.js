import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import Message from "../components/Message";
import { addToSponsor } from "../actions/sponsorActions";
import CheckoutSteps from "../components/CheckoutSteps";
import barraProgreso from "../assets/barra_donar_reto/Progreso-donar1.png";

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

  // const checkOutHandlerVisitor = () =>{
  //     history.push('/sponsorinfo')
  // }
  const checkOutHandler = () => {
    history.push("/payment");
  };
  return (
    <>
      {/* <CheckoutSteps step1 /> */}
      <Row className="FondoForms1">
        <Col md={8}>
        <img
        src={barraProgreso}
        alt="barraProgreso"
        style={{
          marginLeft: "24vw",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      ></img>
          <h2 style={{marginBottom:'24px'}}>Resumen del reto</h2>
          {sponsorItems.length === 0 ? (
            <Message>
              {" "}
              No has seleccionado un reto <Link to="/">Regresar</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {sponsorItems.map((item) => (
                <ListGroup.Item key={item.reto} style={{background:'transparent'}}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item.imagen}
                        alt={item.titulo}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col md={3}>
                      <Link to={`/reto/${item.reto}`}>
                        <h3 style={{color:'white', marginTop:'16px'}}>{item.titulo}</h3>
                      </Link>
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
            <ListGroup variant="flush" style={{background:'transparent'}}>
              <Button
                type="button"
                className="btn-block Primary-button"
                style={{border:'none', boxShadow:'0px !important'}}
                onClick={checkOutHandler}
              >
                Continuar
              </Button>
            </ListGroup>
            {/* <ListGroup variant='flush'>
                    <Button type="button" className='btn-block' onClick={checkOutHandlerVisitor}>Continuar como Visitante</Button>
              </ListGroup> */}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SponsorScreen;
