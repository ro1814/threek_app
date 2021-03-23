import React, { useState } from "react";
import { Form, Button, Col, Row, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import {
  savePaymentMethod,
  saveCantidadPersonalizada,
} from "../actions/sponsorActions";
import CheckoutSteps from "../components/CheckoutSteps";
import barraProgreso from "../assets/barra_donar_reto/Progreso-donar2.png";

const PaymentScreen = ({ history }) => {
  const sponsor = useSelector((state) => state.sponsor);
  const { infoDonVisitante } = sponsor;
  if (infoDonVisitante) {
  }

  const [paymentMethod, setPaymentMethod] = useState(
    "Tarjeta de débito/crédito"
  );
  const [cantidadPersonalizada, setCantidadPersonalizada] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    dispatch(saveCantidadPersonalizada(cantidadPersonalizada));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      {/* <CheckoutSteps step1 step3 /> */}
      <img
        src={barraProgreso}
        alt="barraProgreso"
        style={{
          marginLeft: "24vw",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      ></img>
      <h2>Importe</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label style={{ marginLeft: "-45vw", marginTop: "24px" }}>
            Elige una cantidad
          </Form.Label>
          {/* <Row>
            <Form.Check type="radio" inline label="€1"></Form.Check>
            <Form.Check type="radio" inline label="€2"></Form.Check>
            <Form.Check type="radio" inline label="€5"></Form.Check>
            <Form.Check type="radio" inline label="€10"></Form.Check>
          </Row> */}
          <Row
            style={{ marginLeft: "0", marginRight: "0", marginBottom: "16px" }}
          >
            <Col>
              <div className="infoPagoSelect">€1</div>
            </Col>
            <Col>
              <div className="infoPagoSelect">€2</div>
            </Col>
            <Col>
              <div className="infoPagoSelect">€5</div>
            </Col>
            <Col>
              <div className="infoPagoSelect">€10</div>
            </Col>
          </Row>
          <Row>
            <FormControl
              label="Cantidad que desees donar €"
              name="cantidadPersonalizada"
              id="cantidadPersonalizada"
              placeholder="Otra cantidad"
              style={{
                height: "48px",
                marginLeft: "16px",
                marginRight: "16px",
                borderRadius: "8px",
                marginBottom: "16px",
                boxShadow: "0px 4px 4px rgba(0, 54, 38, 0.4)",
              }}
              onChange={(e) => setCantidadPersonalizada(e.target.value)}
            />
          </Row>
          <Row
            style={{ marginLeft: "8px", marginRight: "8px", marginTop: "8px" }}
          >
            <Form.Label as="legend">
              <p>¿Quieres dejar un mensaje?</p>
            </Form.Label>
            <FormControl
              as="textarea"
              style={{
                marginTop: "-16px",
                marginBottom: "24px",
                borderRadius: "8px",
              }}
            ></FormControl>
          </Row>

          <Form.Label as="legend">
            {" "}
            <p>Seleccione método de pago</p>
          </Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="Tarjeta de débito/crédito"
              id="PayPal"
              name="paymentMethod"
              value="Tarjeta de débito/crédito"
              style={{ marginTop: "-16px" }}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>

          <Col>
            <Form.Check
              type="radio"
              label="Paypal"
              style={{ marginBottom: "16px" }}
            ></Form.Check>
          </Col>

          <Form.Label as="legend">
            <p>Número de tarjeta</p>
          </Form.Label>
          <FormControl
            label="Cantidad que desees donar €"
            name="cantidadPersonalizada"
            style={{
              height: "48px",
              marginRight: "16px",
              marginTop: "-8px",
              borderRadius: "8px",
              marginBottom: "16px",
              boxShadow: "0px 4px 4px rgba(0, 54, 38, 0.4)",
            }}
          />

          <Form.Label as="legend" style={{ marginTop: "-10px" }}>
            <span style={{ marginLeft: "-1vw" }}>Fecha de caducidad*</span>
            <span style={{ marginLeft: "30vw" }}>CVV*</span>
          </Form.Label>
          <Row>
            <Col>
              <FormControl></FormControl>
            </Col>
            <Col>
              <FormControl></FormControl>
            </Col>
            <Col></Col>
            <Col>
              <FormControl></FormControl>
            </Col>
          </Row>

          <div
            style={{
              height: "200px",
              backgroundColor: "#224e39",
              width: "100vw",
              position: "fixed",
              left: "0",
              bottom: "0",
              zIndex: "-2",
            }}
          ></div>
        </Form.Group>
        <Button type="submit" variant="primary" className="Primary-button">
          Continuar
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
