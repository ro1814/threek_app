import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import Vector from '../../Vector.png'

import {
  Form,
  Button,
  FormControl,
  FormGroup,
  Modal,
  Col,
} from "react-bootstrap";
// import RetoSteps from "../../components/RetoSteps";
import barraProgreso from "../../assets/barra_crear_reto/Progreso-reto3.png";
import { saveDatosReto } from "../../actions/retoActions";

const CrearScreen = ({ history }) => {

  const [smShow, setSmShow] = useState(false);
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
      {/* <RetoSteps step1 step2 step3 /> */}
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
        <Form.Group >
          <Form.Label><h2>
            ¡Genial <strong>{userInfo.nombre}</strong>! Es el momento de
            contarnos más sobre tu reto</h2>
          </Form.Label>
          <Form.Label>
            <p style={{marginLeft:'-24vw', marginTop:'24px', marginBottom:'-16px'}}>Ponle un título épico a tu reto*</p>
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
          <p style={{marginLeft:'-25vw', marginTop:'16px', marginBottom:'-16px'}}>Describe tu reto brevemente*</p>
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
            <Form.Row>

              <Form.Label>
                <p style={{marginTop:'16px', marginBottom:'-24px', marginLeft:'4px'}}>¿Cuándo empieza tu reto?</p>
                </Form.Label>
              <Col>
                <Button variant="primary"size="sm" style={{backgroundColor:'transparent', border:'none', position:'relative', top:'10px', right:'45px'}} onClick={() => setSmShow(true)}>
                <img  src={Vector} alt ='' />
                </Button>
              </Col>
            </Form.Row>

            <Modal
              centered
              autoFocus
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                En threek los retos son de 3 semanas, 21 días. Tú pones la fecha
                de inicio, y la de fin se calcula automaticamente. Te
                recomendamos que crees retos entre 1 y 15 días antes del inicio.
              </Modal.Body>
            </Modal>
            <br/>
            

            <Form.Row>
              <Form.Label>¿Cuando empieza tu reto?</Form.Label>

              <Col>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSmShow(true)}
                >
                  <img src={Vector} alt="" />
                </Button>
              </Col>
            </Form.Row>

            <Modal
              centered
              autoFocus
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                En threek los retos son de 3 semanas, 21 días. Tú pones la fecha
                de inicio, y la de fin se calcula automaticamente. Te
                recomendamos que crees retos entre 1 y 15 días antes del inicio.
              </Modal.Body>
            </Modal>
            <br />

            <FormControl
              type="date"
              name="fechaInicio"
              id="fechaInicio"
              onChange={(e) => setFechaInicio(e.target.value)}
            ></FormControl>

          </FormGroup>
          
          <Form.Label>
            <p style={{marginTop:'16px', marginBottom:'-10px', marginLeft:'0vw'}}>¿Cuál es tu objetivo de recaudación?</p></Form.Label>
          
          <Button size="sm" style={{backgroundColor:'transparent', border:'none', position:'relative', top:'-8px', right:'-5px'}} onClick={() => setSmShow(true)}>
            <img  src={Vector} alt ='' />
          </Button>
          
          <Modal
            centered
            autoFocus
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¡Ten ambición pero sin pasarte! La gente dona más a retos cuyo
              objetivo ven más alcanzables. Estos suelen estar entre 500€ y
              2.000€ aunque dependerá mucho de cuanto compartas el reto en tus
              redes. Recuerda: Una vez iniciado el reto ya no será posible
              modificar la cantidad.
            </Modal.Body>
          </Modal>
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
            style={{width:'343px !important'}}
          >

          

            Siguiente
          </Button>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default CrearScreen;
