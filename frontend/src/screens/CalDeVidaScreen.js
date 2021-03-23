import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeScreenDescubreRetos from "../components/HomeScreenDescubreRetos/HomeScreenDescubreRetos";
import { Row, Button, Col, Image } from "react-bootstrap";
import { listRetos } from "../actions/retoActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import caldevida from "../assets/causa/calidad-vidamed.png";
import testimonios from '../assets/causa/testimonios.png'
import caldevidarec from '../assets/causa/caldevidarec.png'
import caldevidagrafica from '../assets/causa/caldevidagrafica.png'

const CalDeVidaScreen = () => {
  const dispatch = useDispatch();

  const retoList = useSelector((state) => state.retoList);
  const { loading, error, retos } = retoList;

  useEffect(() => {
    dispatch(listRetos());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ color: "#224E39" }}>Calidad de Vida</h1>

      <Image
        src={caldevida}
        style={{ marginTop: "15px", marginLeft: "30px", marginBottom: "16px" }}
        fluid
      />

      <br />

      <div>
        <br />
        <p className="captionCausa">
          Somos promotores de un nuevo modelo de asistencia en ELA en España
          para integrar las necesidades de salud y sociales de estos pacientes,
          capaz de reducir los tiempos de diagnóstico, mejorar radicalmente el
          tratamiento clínico y la adecuada atención sanitaria y social de los
          enfermos y sus familias. <br/> <br/> Además, impulsamos la creación de la
          Comunidad Nacional de la ELA como la figura más representativa de las
          organizaciones del ámbito de la ELA en España que promueva la
          presencia y la participación ciudadana en el diseño y desarrollo de
          políticas y estrategias integrales relacionadas con ELA. <br/> <br/> Por último,
          somos un referente en las soluciones tecnológicas disruptivas que
          aumenten la calidad de vida del paciente y sus familias También somos
          un espacio de encuentro, de formación y de respiro para las personas
          afectadas por la ELA (pacientes, familias y cuidadores/as).
        </p>
      </div>

      <div>
      <h2 style={{ color: "#224E39" }}>Testimonios</h2>
      <Image
        src={testimonios}
        style={{ marginTop: "15px", marginBottom: "16px" }}
        fluid
      />
      <p className="captionCausa">
      Gracias a vuestra ayuda Marta y Santiago han recibido un dispositivo Talk y se pueden volver a comunicar. Conoce su historia en este vídeo.
      </p>
      </div>

      <div>
      <Image
        src={caldevidarec}
        style={{ marginTop: "15px", marginLeft: "30px",marginBottom: "16px" }}
        fluid
      />
      <Image
        src={caldevidagrafica}
        style={{ marginTop: "15px", marginBottom: "16px" }}
        fluid
      />

      </div>
      <h2 style={{ color: "#224E39" }}>Retos que lo apoyan</h2>
      <br />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {retos.map((reto) => (
            <Col key={reto._id} sm={12} md={6} lg={4} xl={3}>
              <HomeScreenDescubreRetos reto={reto} />
            </Col>
          ))}
          {/* <Link to="/#Retos"> */}
          <Button
            type="submit"
            variant="light"
            className="HomeScreenDescubreRetosRetoBtn2 Primary-button"
          >
            <figcaption className="HomeScreenDescubreRetosRetoBtn2Text">
              Ver todos
            </figcaption>
          </Button>
          {/* </Link> */}
        </Row>
      )}
    </>
  );
};

export default CalDeVidaScreen;
