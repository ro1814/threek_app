import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import { Form, Button, FormLabel, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
/* import RetoSteps from "../../components/RetoSteps"; */
import { saveCausaReto } from "../../actions/retoActions";
import investigacionFoto from "../../assets/causa/investigacion.png";
//Imágenes
import calidadFoto from "../../assets/causa/calidad-vida.png";
import visibilidadFoto from "../../assets/causa/visibilidad.png";
import barraProgreso from "../../assets/barra_crear_reto/Progreso-reto2.png";
import "./CausaScreen.css";

const CausaScreen = ({ history }) => {
  const retoSave = useSelector((state) => state.retoSave);
  const { selecCausa } = retoSave;

  const [investigacion, setInvestigacion] = useState(selecCausa.ivestigacion);
  const [calVida, setCalVida] = useState(selecCausa.calVida);
  const [monitorizacion, setMonitorizacion] = useState(
    selecCausa.monitorizacion
  );

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveCausaReto({ investigacion, calVida, monitorizacion }));
    history.push("/crearreto");
  };
  return (
    <FormContainer>
      {/* <RetoSteps step1 step2 /> */}

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
        <Form.Group controlId="causa">
          <FormLabel>
            <h2 className="CausaScreenAreaDonacionesH2Text">
              ¿A qué área de la enfermedad ELA quiere destinar las donaciones?
            </h2>
            <br></br>
          </FormLabel>

          <FormContainer>
            <Row>
              <Col xs={2} style={{ paddingRight: "0", paddingTop: "4px" }}>
                <Image src={investigacionFoto} fluid></Image>
              </Col>
              <Col xs={8} style={{ paddingLeft: "8px", textAlign: "left" }}>
                <FormLabel>
                  <h3>Investigación</h3>
                </FormLabel>
                <p className="parInvc captionCausa">
                  Desarrollamos programas de investigación, organizamos foros
                  científicos y jornadas de divulgación.
                </p>
              </Col>
              <Col xs={1}>
                <Form.Check
                  id="investigacion"
                  name="investigacion"
                  value="investigacion"
                  size="sm"
                  onChange={(e) => setInvestigacion(e.target.value)}
                  type="checkbox"
                  style={{ position: "relative", top: "70px" }}
                ></Form.Check>
              </Col>
            </Row>

            <Row style={{ marginTop: "16px" }}>
              <Col xs={2} style={{ paddingRight: "0", paddingTop: "4px" }}>
                <Image src={calidadFoto} fluid></Image>
              </Col>

              <Col xs={8} style={{ paddingLeft: "8px", textAlign: "left" }}>
                <FormLabel>
                  <h3>Calidad de Vida</h3>
                </FormLabel>
                <p className="parInv captionCausa">
                  Promovemos un nuevo modelo de asistencia en ELA para integar
                  las necesidades sociales y de salud de los pacientes.
                </p>
              </Col>
              <Col xs={1}>
                <Form.Check
                  id="calVida"
                  name="calVida"
                  value="calidad de vida"
                  size="sm"
                  onChange={(e) => setCalVida(e.target.value)}
                  type="checkbox"
                  style={{ position: "relative", top: "70px" }}
                ></Form.Check>
              </Col>
            </Row>

            <Row style={{ marginTop: "16px" }}>
              <Col xs={2} style={{ paddingRight: "0", paddingTop: "4px" }}>
                <Image src={visibilidadFoto} fluid></Image>
              </Col>
              <Col xs={8} style={{ paddingLeft: "8px", textAlign: "left" }}>
                <FormLabel>
                  <h3>Visibilidad</h3>
                </FormLabel>
                <p className="parInv captionCausa">
                  Cada 21 de junio edificios de cientos de municipios de España
                  se iluminan de verde en apoyo a los enfermos de ELA.
                </p>
              </Col>
              <Col xs={1}>
                <Form.Check
                  id="monitorizacion"
                  name="monitorizacion"
                  value="monitorizacion"
                  size="sm"
                  onChange={(e) => setMonitorizacion(e.target.value)}
                  type="checkbox"
                  style={{ position: "relative", top: "70px" }}
                ></Form.Check>
              </Col>
            </Row>
          </FormContainer>
        </Form.Group>
        <Button
          block
          type="submit"
          variant="primary Primary-button"
          style={{
            position: "fixed",
            bottom: "20px",
          }}
        >
          <figcaption className="CausaScreenBtnText">
            Siguiente
          </figcaption>
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CausaScreen;
