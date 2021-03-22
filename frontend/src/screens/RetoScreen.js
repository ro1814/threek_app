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
/* import Retador from "../components/CardRetador"; */
import "./RetoScreen.css";
import "./RetoScreenModalPublicacionDia.css";
//Imagenes
import fotoReto1 from "../assets/fotos-reto/foto1.png";
import retador1 from "../assets/retadores/retador1.png";
import IconosRedesSocialesFacebookVerde from "../assets/images/Icons/IconosRedesSocialesFacebookVerde.png";
import IconosRedesSocialesInstagramVerde from "../assets/images/Icons/IconosRedesSocialesInstagramVerde.png";
import BarraHorizontal from "../assets/BarraHorizontal.png";
import RetoScreenDiaImgNo from "../assets/images/RetoScreenImages/RetoScreenDiaImgNo.png"

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
        src={fotoReto1}
        alt="fotoReto1"
        fluid
        className="RetoScreenModalPublicacionDiaImg"
      />
      <p className="RetoScreenModalPublicacionDiaDesc">
        Velit anim ad ea duis pariatur!!!! ipsum proident cillum. Adipisicing
        proident labore tempor fugiat magna ipsum reprehenderi!
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
      {/* <Link className="btn btn-light my-3" to="/">
        Descubre retos
      </Link> */}
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
            <Image src={reto.imagen} alt={reto.nombre} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p className="RetoScreenRetoFechasText">
                  Inicio {reto.fechaInicio} - Fin 25 julio
                </p>
                <p className="RetoScreenRetoActivoText">Reto Activo</p>
                {/* <p className="RetoScreenRetoDiasRestantesText">Faltan 10 días</p> */}

                <h2 className="RetoScreenRetoTituloText">{reto.titulo}</h2>

                <h5 className="RetoScreenRetoRecaudacionText">
                  Recaudado 110€ de&nbsp;<b>{reto.objetivoRec}€</b>
                </h5>

                <ProgressBar
                  now={75}
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

                <h4 className="RetoScreenRetoInfoTitleText">
                  <b>Información</b>
                </h4>

                <Image
                  src={fotoReto1}
                  alt="fotoReto1"
                  fluid
                  className="RetoScreenRetoInfoPrincipalImg"
                />
                <p className="RetoScreenRetoInfoRetoDesc">{reto.desc}</p>
                {/* <p className="RetoScreenRetoInfoRetoDesc">Velit anim ad ea duis pariatur ipsum proident cillum. Adipisicing proident labore tempor fugiat magna ipsum reprehenderit consectetur mollit. Ipsum esse duis Lorem id elit sint. Et excepteur qui elit officia amet ex consectetur magna minim eiusmod reprehenderit aliquip voluptate. Ex eu fugiat adipisicing adipisicing non ullamco non eu laborum deserunt incididunt aliqua.</p> */}

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
                  className="RetoScreenIconosRedesSocialesInstagramVerde"
                />
                <p className="RetoScreenInstagramRetador">@nuriclimb</p>

                <h4 className="RetoScreenRetoDiaTitleText">
                  <b>El reto día a día</b>
                </h4>
                <Container>
                  {/* //! Row 1 */}
                  <Row>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        onClick={() => setModalShow(true)}
                        className="RetoScreenRetoDiaImg1"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg2"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg3"
                      />
                    </Col>
                  </Row>
                  {/* //! Row 2 */}
                  <Row>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg4"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg5"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg6"
                      />
                    </Col>
                  </Row>
                  {/* //! Row 3 */}
                  <Row>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg7"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg8"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg9"
                      />
                    </Col>
                  </Row>
                  {/* //! Row 4 */}
                  <Row>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg10"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg11"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg12"
                      />
                    </Col>
                  </Row>
                  {/* //! Row 5 */}
                  <Row>
                    <Col>
                      <Image
                        src={fotoReto1}
                        fluid
                        className="RetoScreenRetoDiaImg13"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        fluid
                        className="RetoScreenRetoDiaImg14"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        fluid
                        className="RetoScreenRetoDiaImg15"
                      />
                    </Col>
                  </Row>
                  {/* //! Row 6 */}
                  <Row>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        fluid
                        className="RetoScreenRetoDiaImg16"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        fluid
                        className="RetoScreenRetoDiaImg17"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        fluid
                        className="RetoScreenRetoDiaImg18"
                      />
                    </Col>
                  </Row>
                  {/* //! Row 7 */}
                  <Row>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        fluid
                        className="RetoScreenRetoDiaImg19"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        fluid
                        className="RetoScreenRetoDiaImg20"
                      />
                    </Col>
                    <Col>
                      <Image
                        src={RetoScreenDiaImgNo}
                        fluid
                        className="RetoScreenRetoDiaImg21"
                      />
                    </Col>
                  </Row>
                </Container>
                {/* //*RetoScreenRetoCausa */}
                <h4 className="RetoScreenRetoCausaTitleText">
                  <b>Causa</b>
                </h4>
                <p className="RetoScreenRetoCausaInfoText">
                  Velit anim ad ea duis pariatur ipsum proident cillum.
                  Adipisicing proident labore tempor fugiat magna ipsum
                  reprehenderit consectetur mollit. Ipsum esse duis Lorem id
                  elit sint. Et excepteur qui elit officia amet ex consectetur
                  magna minim eiusmod reprehenderit aliquip voluptate. Ex eu
                  fugiat adipisicing adipisicing non ullamco non eu laborum
                  deserunt incididunt aliqua.
                </p>
                <p className="RetoScreenRetoCausaVerMasText">
                  <u>Ver más</u>
                </p>
                {/* //*RetoScreenRetoSponsors */}
                <h4 className="RetoScreenRetoSponsorsTitleText">
                  <b>Sponsors</b>
                </h4>
                {/* //! sponsor 1 */}
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
                {/* //! sponsor 2 */}
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
                {/* //! sponsor 3 */}
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
                {/* //* RetoScreenRetoBtnSponsor2 */}
                <Button
                  type="button"
                  className="btn btn-danger btn-block Primary-button RetoScreenRetoBtnSponsor2"
                  variant="danger"
                  onClick={addToCheckOutHandler}
                >
                  <p className="RetoScreenRetoBtnSponsorText">
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
