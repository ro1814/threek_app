import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ProgressBar,
  Card,
  Container,
  Modal,
} from "react-bootstrap";
import { listRetosDetails } from "../actions/retoActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Retador from '../components/CardRetador'
//Imagenes
import fotoReto1 from '../assets/fotos-reto/foto1.png'
import retador1 from '../assets/retadores/retador1.png'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Día 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={fotoReto1} alt="holder" fluid />
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}

const RetoScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const retoDetails = useSelector((state) => state.retoDetails);
  const { loading, error, reto } = retoDetails;

  useEffect(() => {
    dispatch(listRetosDetails(match.params.id));
  }, [dispatch, match]);

  const addToCheckOutHandler = () => {
    history.push(`/sponsor/${match.params.id}`);
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <Link className="btn btn-light my-3" to="/">
        Descubre retos
      </Link> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6} style={{
            padding:'0',
            marginTop:'-16px'
          }}>
            <Image src={reto.imagen} alt={reto.nombre} fluid />
          </Col>

          <Col md={3} >
            <ListGroup variant="flush">
              <ListGroup.Item style={{paddingLeft:'0', paddingRight:'0'}}>
                {/* MISMO ROW */}
                <span className='fechaCaption'>Inicio: {reto.fechaInicio}, Fin: 22-01-2021</span>
                <span><b>Faltan 3 días</b></span>
              
                
                  
                {/* MISMO ROW */}
                <h2>Título del reto: "{reto.titulo}"</h2>
                <h5>Recaudado: {reto.objetivoRec}€</h5>
                {/* BARRA DE PROGRESO */}
                <ProgressBar now={40} className="Recaudado" />
                <br />
                {/* Container de retador  */}
                <Card className="p-3">
                  <Retador imag={retador1}></Retador>
                </Card>
                <br />
                <Button
                  type="button"
                  className="btn btn-danger btn-block Primary-button"
                  variant="danger"
                  onClick={addToCheckOutHandler}
                >
                  Apoya este reto
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>
                  <b>Información</b>
                </h4>
                {/* IMAGEN VIDEO URL */}
                <Image src={fotoReto1} fluid />
                <p>{reto.desc}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>
                  <b>El reto día a día</b>
                </h4>
                {/* 21 containers de imagen = 7 rows con 3 containers de imagen */}
                <Container>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image
                       src={fotoReto1}
                        fluid
                        onClick={() => setModalShow(true)}
                      />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                    <Col xs={3} md={3}>
                      <Image src={fotoReto1} fluid />
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>
                  <b>Causa</b>
                </h4>
                {/* ¿ <p>{causa.desc}</p> ? */}
                <p>
                  Velit anim ad ea duis pariatur ipsum proident cillum.
                  Adipisicing proident labore tempor fugiat magna ipsum
                  reprehenderit consectetur mollit. Ipsum esse duis Lorem id
                  elit sint. Et excepteur qui elit officia amet ex consectetur
                  magna minim eiusmod reprehenderit aliquip voluptate. Ex eu
                  fugiat adipisicing adipisicing non ullamco non eu laborum
                  deserunt incididunt aliqua.
                  <br />
                  <Link to="/" style={{ color: '#000' }}>
                    <u>Ver más</u>
                  </Link>
                </p>
                <Button
                  type="button"
                  className="btn btn-danger btn-block Primary-button"
                  variant="danger"
                  onClick={addToCheckOutHandler}
                >
                  Apoya este reto
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default RetoScreen;
