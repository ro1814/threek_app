import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, FormControl, FormGroup } from "react-bootstrap";
import RetoSteps from "../../components/RetoSteps";
import { saveDatosReto } from "../../actions/retoActions";

const CrearScreen = ({ history }) => {
  const retoSave = useSelector((state) => state.retoSave);
  const { datosReto } = retoSave;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [titulo, setTitulo] = useState(datosReto.titulo);
  const [desc, setDesc] = useState(datosReto.desc);
  const [fechaInicio, setFechaInicio] = useState(datosReto.fechaInicio);
  const [objetivoRec, setObjetivoRec] = useState(datosReto.objetivoRec);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveDatosReto({ titulo, desc, fechaInicio, objetivoRec }));
    history.push("/crearretoimagenes");
  };

  return (
    <FormContainer>
      <RetoSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>
            ¡Genial, <strong>{userInfo.nombre}</strong>! Es el momento de
            contarnos más sobre tu reto.
          </Form.Label>

          <Form.Label>
            <strong>Ponle un título épico a tu reto*:</strong>
          </Form.Label>

          <FormGroup>
            <FormControl
              placeholder="Título"
              type="text"
              label="Titulo"
              name="titulo"
              id="titulo"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </FormGroup>

          <Form.Label>
            <strong>Describe tu reto brevemente*</strong>
          </Form.Label>

          <FormGroup>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe tu reto"
              type="text"
              label="desc"
              name="desc"
              id="desc"
              onChange={(e) => setDesc(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>¿Cuando empieza tu reto?</Form.Label>

            <FormControl
              type="date"
              name="fechaInicio"
              id="fechaInicio"
              onChange={(e) => setFechaInicio(e.target.value)}
            ></FormControl>
          </FormGroup>

          <Form.Label>Fecha fin: 00/00/00</Form.Label>

          <Form.Label>Objetivo de recaudación:</Form.Label>

          <FormGroup>
            <Form.Control
              rows={3}
              placeholder="€"
              size="lg"
              type="number"
              label="objetivoRec"
              name="objetivoRec"
              id="objetivoRec"
              onChange={(e) => setObjetivoRec(e.target.value)}
            />
          </FormGroup>

          <Button
            block
            type="submit"
            variant="primary"
            className="Primary-button"
          >
            Continue
          </Button>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default CrearScreen;
