import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
/* import RetoSteps from "../../components/RetoSteps"; */
import { saveDeporteReto } from "../../actions/retoActions";
// Imágenes
import tipoCiclismo from "../../assets/tipo-reto/ciclismo.png";
import tipoRunning from "../../assets/tipo-reto/running.png";
import tipoEscalada from "../../assets/tipo-reto/escalada.png";
import tipoNatacion from "../../assets/tipo-reto/natacion.png";
import tipoTrecking from "../../assets/tipo-reto/trecking.png";
import barraProgreso from "../../assets/barra_crear_reto/Progreso-reto1.png";
import "./TipoScreen.css";

const TipoScreen = ({ history }) => {
  const retoSave = useSelector((state) => state.retoSave);
  const { selecDeporte } = retoSave;

  const [ciclismo, setCiclismo] = useState(selecDeporte.ciclismo);
  const [running, setRunning] = useState(selecDeporte.running);
  const [natacion, setNatacion] = useState(selecDeporte.natacion);
  const [senderismo, setSenderismo] = useState(selecDeporte.senderismo);
  const [escalada, setEscalada] = useState(selecDeporte.escalada);


  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveDeporteReto({ ciclismo, running, senderismo, escalada, natacion })
    );
    history.push("/crearretocausa");

 
  };

  return (
    <FormContainer>
      {/* <RetoSteps step1 /> */}
      <img
        src={barraProgreso}
        alt="barraProgreso"
        style={{
          marginLeft: "14vw",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      ></img>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="deporte">
          <Form.Label>
            <h2 className="TipoScreenDeporteRelacionadoH2Text">
              ¿Con qué deporte está relacionado tu reto?
            </h2>
          </Form.Label>

          <img
            src={tipoCiclismo}
            alt="tipoCiclismo"
            style={{
              position: "absolute",
              top: "160px",
              left: "42px",
              height: "80px",
            }}
          ></img>
          <Form.Check
            type="radio"
            inline
            label="Ciclismo"
            id="ciclismo"
            name="ciclismo"
            value="ciclismo"
            style={{ marginTop: "100px" }}
            className="deporteForm"
            onChange={(e) => setCiclismo(e.target.value)}
          >
          </Form.Check>

          <img
            src={tipoRunning}
            alt="tipoRunning"
            style={{
              position: "absolute",
              top: "160px",
              left: "146px",
              height: "80px",
            }}
          ></img>
          <Form.Check
            type="radio"
            inline
            label="Running"
            id="running"
            name="running"
            value="running"
            style={{ marginTop: "100px" }}
            className="deporteForm"
            onChange={(e) => setRunning(e.target.value)}
          >
          </Form.Check>

          <img
            src={tipoNatacion}
            alt="tipoNatacion"
            style={{
              position: "absolute",
              top: "160px",
              left: "248px",
              height: "80px",
            }}
          ></img>
          <Form.Check
            type="radio"
            inline
            label="Natación"
            id="natacion"
            name="natacion"
            value="natacion"
            style={{ marginTop: "100px" }}
            className="deporteForm"
            onChange={(e) => setNatacion(e.target.value)}
          >
          </Form.Check>

          <img
            src={tipoTrecking}
            alt="tipoTrecking"
            style={{
              position: "absolute",
              top: "300px",
              left: "82px",
              height: "80px",
            }}
          ></img>
          <Form.Check
            type="radio"
            inline
            label="Trekking"
            id="senderismo"
            name="senderismo"
            value="senderismo"
            style={{ marginTop: "110px" }}
            className="deporteForm"
            onChange={(e) => setSenderismo(e.target.value)}
          >
          </Form.Check>

          <img
            src={tipoEscalada}
            alt="tipoEscalada"
            style={{
              position: "absolute",
              top: "300px",
              left: "216px",
              height: "80px",
            }}
          ></img>
          <Form.Check
            type="radio"
            inline
            label="Escalada"
            id="escalada"
            name="escalada"
            value="escalada"
            style={{ marginTop: "110px" }}
            className="deporteForm"
            onChange={(e) => setEscalada(e.target.value)}
          >
           
          </Form.Check>
        </Form.Group>

        <Button
          block
          type="submit"
          variant="primary"
          className="Primary-button"
        >
          <figcaption className="TipoScreenBtn">Siguiente</figcaption>
        </Button>
      </Form>
    </FormContainer>
  );
};

export default TipoScreen;
