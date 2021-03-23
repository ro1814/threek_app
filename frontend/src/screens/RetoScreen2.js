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
import "./RetoScreen2.css";
import "./RetoScreenModalPublicacionDia.css";
//Imagenes
import RetoScreen2RetoImg from "../assets/images/RetoScreen2Images/RetoScreen2RetoImg.png";
import retador1 from "../assets/retadores/retador2.png";
import IconoEditarVerde from "../assets/images/Icons/IconoEditarVerde.png";
import IconosRedesSocialesInstagramVerde from "../assets/images/Icons/IconosRedesSocialesInstagramVerde.png";
import retoNo1 from "../assets/fotos-reto/retoNo-1.png";
import retoNo2 from "../assets/fotos-reto/retoNo-2.png";
import videono1 from "../assets/fotos-reto/videoNo1.png";

const RetoScreen2 = ({ history, match }) => {
  const dispatch = useDispatch();

  const retoDetails = useSelector((state) => state.retoDetails);
  const { loading, error, reto } = retoDetails;

  useEffect(() => {
    dispatch(listRetosDetails("6051f46d192de50d7778e962"));
  }, [dispatch, match]);

  const addToCheckOutHandler = () => {
    history.push("/sponsor/6051f46d192de50d7778e962");
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
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
            {/* //! info dinamica */}
            {/* <Image src={reto.imagen} alt={reto.nombre} fluid /> */}

            {/* //! info estatica */}
            <Image
              src={RetoScreen2RetoImg}
              alt={RetoScreen2RetoImg}
              className="RetoScreen2RetoImg"
            />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p className="RetoScreenRetoFechasText" style={{marginLeft:'-16px'}}>
                  Inicio 5 julio - Fin 25 julio
                </p>

                <p className="RetoScreenRetoDiasRestantesText">
                  Faltan 10 días
                </p>

                <h2 className="RetoScreenRetoTituloText">
                  Reto Threek Natación
                </h2>

                <h5 className="RetoScreenRetoRecaudacionText">
                  Recaudado 0€ de&nbsp;<b>1000€</b>
                </h5>

                <ProgressBar
                  now={2}
                  className="Recaudado RetoScreenRetoProgressBar"
                />

                <Card className="p-3 RetoScreenRetoCardRetador">
                  <img
                    src={retador1}
                    alt="retador1"
                    className="RetoScreenRetoRetadorImg"
                  />
                  <p className="RetoScreenRetoRetadorNombreText">
                    Creado por &nbsp;<b>Samuel J.</b>
                  </p>
                  <p className="RetoScreenRetoRetadorRecaudadoText">
                    Total recaudado 0€
                  </p>
                  <p className="RetoScreenRetoRetadorRetosCreadosText">
                    1 retos
                  </p>
                  <p className="RetoScreenRetoRetadorCausaRetoText">
                    En favor de
                  </p>
                  <Button
                    variant="outline-light"
                    className="RetoScreenRetoRetadorCausaRetoBtn"
                  >
                    <p className="RetoScreenRetoRetadorCausaRetoBtnText">
                      Calidad Vida
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

                <h4 className="RetoScreenRetoInfoTitleText">
                  <b>Información</b>
                </h4>

                <Image
                  src={IconoEditarVerde}
                  alt="IconoEditarVerde"
                  className="RetoScreenIconoEditarVerde"
                />

                <Image
                  src={videono1}
                  alt="fotoReto1"
                  className="RetoScreenRetoInfoPrincipalImg"
                />
                <p className="RetoScreenRetoInfoRetoDesc" style={{marginTop:'-20px', marginBottom:'40px'}}>
                  Mi nombre es Samuel, y soy un amante empedernido de la
                  natación. Durante los siguientes 18 días, me entrenaré a
                  diario para poder conseguir mi meta; recorrerme la costa
                  catalana nadando. Durante los últimos 3 días, intentaré
                  conseguir mi objetivo, recorriendo más de 50km al día hasta
                  llegar a la meta. ¡Sígueme en esta aventura!
                </p>

                <Image
                  src={IconosRedesSocialesInstagramVerde}
                  alt="IconosRedesSocialesInstagramVerde"
                  fluid
                  className="RetoScreenIconosRedesSocialesInstagramVerde1"
                />
                <p className="RetoScreenInstagramRetador">@sam89</p>

                <h4 className="RetoScreenRetoDiaTitleText">
                  <b>El reto día a día</b>
                </h4>
                <Container>
                  <Row>
                    <Col>
                      <Image
                        src={retoNo1}
                        onClick={() => setModalShow(true)}
                        className="RetoScreenRetoDiaImg1"
                      />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg2" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg3" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg4" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg5" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg6" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg7" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg8" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg9" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg10" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg11" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg12" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg13" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg14" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg15" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg16" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg17" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg18" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg19" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg20" />
                    </Col>
                    <Col>
                      <Image src={retoNo2} className="RetoScreenRetoDiaImg21" />
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
                <p className="RetoScreenRetoSponsorText1">
                  Se el primero en sponsorizar este reto
                </p>
                <Button
                  type="button"
                  className="btn btn-danger btn-block Primary-button RetoScreenRetoBtnSponsor2"
                  variant="danger"
                  onClick={addToCheckOutHandler}
                >
                  <p className="RetoScreenRetoBtnSponsorTexto">
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

export default RetoScreen2;
