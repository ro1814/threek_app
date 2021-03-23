import React, { useEffect } from "react";
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
import "./RetoScreen.css";
import "./RetoScreenModalPublicacionDia.css";
//Imagenes
import retador1 from "../assets/retadores/retador1.png";
import RetoScreenRetoInfoPrincipalImg from "../assets/images/RetoScreenImages/RetoScreenRetoInfoPrincipalImg.png";
import IconosRedesSocialesFacebookVerde from "../assets/images/Icons/IconosRedesSocialesFacebookVerde.png";
import IconosRedesSocialesInstagramVerde from "../assets/images/Icons/IconosRedesSocialesInstagramVerde.png";
import BarraHorizontal from "../assets/BarraHorizontal.png";
import RetoScreenDiaImgNo from "../assets/images/RetoScreenImages/RetoScreenDiaImgNo.png"
import fotoDia1 from '../assets/fotos-reto/foto-dia1.png'
import fotoDia2 from '../assets/fotos-reto/foto-dia2.png'
import fotoDia3 from '../assets/fotos-reto/foto-dia3.png'
import fotoDia4 from '../assets/fotos-reto/foto-dia4.png'
import fotoDia5 from '../assets/fotos-reto/foto-dia5.png'
import fotoDia6 from '../assets/fotos-reto/foto-dia6.png'
import fotoDia7 from '../assets/fotos-reto/foto-dia7.png'
import fotoDia8 from '../assets/fotos-reto/foto-dia8.png'
import fotoDia9 from '../assets/fotos-reto/foto-dia9.png'
import fotoDia10 from '../assets/fotos-reto/foto-dia10.png'
import fotoDia11 from '../assets/fotos-reto/foto-dia11.png'
import fotoDia12 from '../assets/fotos-reto/foto-dia12.png'
import fotoDia13 from '../assets/fotos-reto/foto-dia13.png'
import fotoModal from '../assets/fotos-reto/foto-dia1-modal.png'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title
        id="contained-modal-title-vcenter"
        className="RetoScreenModalPublicacionDiaTitle"
      >
        Día 1
      </Modal.Title>
      <Image
        src={fotoModal}
        alt="fotoReto1"
        className="RetoScreenModalPublicacionDiaImg"
      />
      <p className="RetoScreenModalPublicacionDiaDesc">
        Día intenso en la montaña!! Hoy, 200 metros de desnivel alcanzados. Con
        frío, pero sin perder la sonrisa!
      </p>
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
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col
            md={6}
            style={{
              padding: "0",
              marginTop: "-16px",
              height: "241px",
            }}
          >
            <Image
              src={reto.imagen}
              alt={reto.nombre}
              className="RetoScreenRetoImg"
            />
          </Col>

          <Col md={3} >
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p className="RetoScreenRetoFechasTexto">
                  Inicio 22 Marzo - Fin 15 Abril
                </p>

                <p className="RetoScreenRetoActivoText">Reto Activo</p>

                <h2 className="RetoScreenRetoTituloText">{reto.titulo}</h2>

                <h5 className="RetoScreenRetoRecaudacionText">
                  Recaudado 110€ de&nbsp;<b>{reto.objetivoRec}€</b>
                </h5>

                <ProgressBar
                  now={60}
                  className="Recaudado RetoScreenRetoProgressBar"
                />

                <Card className="p-3 RetoScreenRetoCardRetador">
                  <img
                    src={retador1}
                    alt="retador1"
                    className="RetoScreenRetoRetadorImg"
                  />
                  <p className="RetoScreenRetoRetadorNombreText">
                    Creado por &nbsp;<b>Nuria L.</b>
                  </p>
                  <p className="RetoScreenRetoRetadorRecaudadoText">
                    Total recaudado 2.540€
                  </p>
                  <p className="RetoScreenRetoRetadorRetosCreadosText">
                    2 retos
                  </p>
                  <p className="RetoScreenRetoRetadorCausaRetoText">
                    En favor de
                  </p>
                  <Button
                    variant="outline-light"
                    className="RetoScreenRetoRetadorCausaRetoBtn"
                  >
                    <p className="RetoScreenRetoRetadorCausaRetoBtnText">
                      Investigación
                    </p>
                  </Button>
                </Card>

                <Button
                  type="button"
                  className="btn btn-danger btn-block Primary-button RetoScreenRetoBtnSponsor1"
                  variant="danger"
                  onClick={addToCheckOutHandler}
                >
                  <p className="RetoScreenRetoBtnSponsor1Text">
                    Apoya este reto
                  </p>
                </Button>

                <h4 className="RetoScreenRetoInfoText">
                  <b>Información</b>
                </h4>

                <Image
                  src={RetoScreenRetoInfoPrincipalImg}
                  alt="RetoScreenRetoInfoPrincipalImg"
                  className="RetoScreenRetoInfoPrincImg"
                />

                <p className="RetoScreenRetoInfoRetoDescrip">{reto.desc}</p>

                <Image
                  src={IconosRedesSocialesFacebookVerde}
                  alt="IconosRedesSocialesFacebookVerde"
                  fluid
                  className="RetoScreenIconosRedesSocialesFacebookVerde"
                />
                <p className="RetoScreenFacebookRetador">@nuriclimb</p>

                <Image
                  src={IconosRedesSocialesInstagramVerde}
                  alt="IconosRedesSocialesInstagramVerde"
                  fluid
                  className="RetoScreenIconosRedesSocialesInstagramVerde1"
                />
                <p className="RetoScreenInstagramRetador1">@nuriclimb</p>

                <h4 className="RetoScreenRetoDiaTitleText">
                  <b>El reto día a día</b>
                </h4>
                <Container>
                  <Row>
                    <Col>
                      <Image
                        src={fotoDia1}
                        onClick={() => setModalShow(true)}
                        className="RetoScreenRetoDiaImg1"
                      />
                    </Col>
                    <Col>
                      <Image src={fotoDia2} className="RetoScreenRetoDiaImg2" />
                    </Col>
                    <Col>
                      <Image src={fotoDia3} className="RetoScreenRetoDiaImg3" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image src={fotoDia4} className="RetoScreenRetoDiaImg4" />
                    </Col>
                    <Col>
                      <Image src={fotoDia5} className="RetoScreenRetoDiaImg5" />
                    </Col>
                    <Col>
                      <Image src={fotoDia6} className="RetoScreenRetoDiaImg6" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image src={fotoDia7} className="RetoScreenRetoDiaImg7" />
                    </Col>
                    <Col>
                      <Image src={fotoDia8} className="RetoScreenRetoDiaImg8" />
                    </Col>
                    <Col>
                      <Image src={fotoDia9} className="RetoScreenRetoDiaImg9" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image
                        src={fotoDia10}
                        className="RetoScreenRetoDiaImg10"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoDia11}
                        className="RetoScreenRetoDiaImg11"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoDia12}
                        className="RetoScreenRetoDiaImg12"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image
                        src={fotoDia13}
                        className="RetoScreenRetoDiaImg13"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        className="RetoScreenRetoDiaImg14"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        className="RetoScreenRetoDiaImg15"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        className="RetoScreenRetoDiaImg16"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        className="RetoScreenRetoDiaImg17"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        className="RetoScreenRetoDiaImg18"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        className="RetoScreenRetoDiaImg19"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        className="RetoScreenRetoDiaImg20"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        className="RetoScreenRetoDiaImg21"
                      />
                    </Col>
                  </Row>
                </Container>

                <h4 className="RetoScreenRetoCausaText">
                  <b>Causa</b>
                </h4>
                <p className="RetoScreenRetoCausaInfoText">
                  La ELA es una enfermedad que actualmente no tiene una terapia
                  que haya demostrado resultar efectiva más allá del Riluzol,
                  cuyo uso se aprobó ya en 1996. El único camino para conseguir
                  cambiar esto es potenciar la investigación de calidad. Desde
                  la Fundación Luzón consideramos, como pilar fundamental de
                  nuestro trabajo, el promover ...&ensp;
                  <u className="RetoScreenRetoCausaVerMasText">Ver más</u>
                </p>
                <h4 className="RetoScreenRetoSponsorsTitleText">
                  <b>Sponsors</b>
                </h4>
                <img
                  src={BarraHorizontal}
                  alt="BarraHorizontal"
                  className="RetoScreenRetoSponsorBarraHorizontal1"
                />
                <p className="RetoScreenRetoSponsorName1">Susana Sánchez</p>
                <p className="RetoScreenRetoSponsorDonacionText1">
                  <b>Donó</b>
                </p>
                <p className="RetoScreenRetoSponsorDonacionCifra1">
                  <b>20 €</b>
                </p>
                <p className="RetoScreenRetoSponsorText1">
                  Mucho ánimo! confío en ti amiga! Y gracias por hacer que esto
                  vaya a una buena causa
                </p>
                <img
                  src={BarraHorizontal}
                  alt="BarraHorizontal"
                  className="RetoScreenRetoSponsorBarraHorizontal2"
                />
                <p className="RetoScreenRetoSponsorName2">Pablo Marcos</p>
                <p className="RetoScreenRetoSponsorDonacionText2">
                  <b>Donó</b>
                </p>
                <p className="RetoScreenRetoSponsorDonacionCifra2">
                  <b>5 €</b>
                </p>
                <p className="RetoScreenRetoSponsorText2">
                  No es mucho pero aquí va mi granito de arena para la causa.Y
                  mucha fuerza, que tú puedes!
                </p>
                <img
                  src={BarraHorizontal}
                  alt="BarraHorizontal"
                  className="RetoScreenRetoSponsorBarraHorizontal3"
                />
                <p className="RetoScreenRetoSponsorName3">Anónimo</p>
                <p className="RetoScreenRetoSponsorDonacionText3">
                  <b>Donó</b>
                </p>
                <p className="RetoScreenRetoSponsorDonacionCifra3">
                  <b>5 €</b>
                </p>
                <img
                  src={BarraHorizontal}
                  alt="BarraHorizontal"
                  className="RetoScreenRetoSponsorBarraHorizontal4"
                />
                <p className="RetoScreenRetoSponsorVerMasText">
                  <u>Ver más</u>
                </p>
                <Button
                  type="button"
                  className="btn btn-danger btn-block Primary-button RetoScreenRetoBtnSponsor2"
                  variant="danger"
                  onClick={addToCheckOutHandler}
                >
                  <p className="RetoScreenRetoBtnSponsor2Texto">
                    Apoya este reto
                  </p>
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
