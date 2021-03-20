import React, { useState } from "react";
import { Form, Button, Col, Row, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import {
  savePaymentMethod,
  saveCantidadPersonalizada,
} from "../actions/sponsorActions";
import CheckoutSteps from "../components/CheckoutSteps";

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
      <CheckoutSteps step1 step3 />
      <h2>Información de pago</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Elige una cantidad</Form.Label>
          <Row>
            <Form.Check type="radio" inline label="€1"></Form.Check>
            <Form.Check type="radio" inline label="€2"></Form.Check>
            <Form.Check type="radio" inline label="€5"></Form.Check>
            <Form.Check type="radio" inline label="€10"></Form.Check>
          </Row>
          <Row>
            <Form.Label>Cantidad personalizada €</Form.Label>
            <FormControl
              label="Cantidad que desees donar €"
              name="cantidadPersonalizada"
              id="cantidadPersonalizada"
              onChange={(e) => setCantidadPersonalizada(e.target.value)}
            />
          </Row>
          <Form.Label as="legend">
            <p>Escriba datos de tarjeta de débito o crédito</p>
          </Form.Label>
          <FormControl
            label="Cantidad que desees donar €"
            name="cantidadPersonalizada"
          />

          <Form.Label as="legend"> Seleccione método de pago</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="Tarjeta de débito/crédito"
              id="PayPal"
              name="paymentMethod"
              value="Tarjeta de débito/crédito"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>

          <Col>
            <Form.Check type="radio" label="Paypal"></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continúe
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
