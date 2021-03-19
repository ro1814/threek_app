import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import RetoSteps from "../../components/RetoSteps";
import { saveDeporteReto } from "../../actions/retoActions";

const TipoScreen = ({ history }) => {
  const retoSave = useSelector((state) => state.retoSave);
  const { selecDeporte } = retoSave;

  const [ciclismo, setCiclismo] = useState(selecDeporte.ciclismo);
  const [running, setRunning] = useState(selecDeporte.running);
  const [natacion, setNatacion] = useState(selecDeporte.natacion);
  const [senderismo, setSenderismo] = useState(selecDeporte.senderismo);
  const [escalada, setEscalada] = useState(selecDeporte.escalada)

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveDeporteReto({ciclismo, running, senderismo, escalada, natacion})
    );
    history.push("/crearretocausa");
  };

  return (
    <FormContainer>
      <RetoSteps step1 />

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="deporte">
          <Form.Label>¿Con qué deporte está relacionado tu reto?</Form.Label>

          <Form.Check
            type="radio"
            inline
            label="Ciclismo"
            id="ciclismo"
            name="ciclismo"
            value="ciclismo"
            onChange={(e) => setCiclismo(e.target.value)}
          ></Form.Check>

          <Form.Check
            type="radio"
            inline
            label="Running"
            id="running"
            name="running"
            value="running"
            onChange={(e) => setRunning(e.target.value)}
          ></Form.Check>

          <Form.Check
            type="radio"
            inline
            label="Natación"
            id="natacion"
            name="natacion"
            value="natacion"
            onChange={(e) => setNatacion(e.target.value)}
          ></Form.Check>

          <Form.Check
            type="radio"
            inline
            label="Senderismo"
            id="senderismo"
            name="senderismo"
            value="senderismo"
            onChange={(e) => setSenderismo(e.target.value)}
          ></Form.Check>

          <Form.Check
            type="radio"
            inline
            label="Escalada"
            id="escalada"
            name="escalada"
            value="escalada"
            onChange={(e) => setEscalada(e.target.value)}
          ></Form.Check>
        </Form.Group>

        <Button block type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default TipoScreen;
