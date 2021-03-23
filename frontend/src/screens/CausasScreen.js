import React from "react";
import investigacionFoto from "../assets/causa/investigacion.png";
import calidadFoto from "../assets/causa/calidad-vida.png";
import visibilidadFoto from "../assets/causa/visibilidad.png";
import {
  Media,
  Col,
  Row,
  Container,
} from "react-bootstrap";

const CausasScreen = () => {
  return (
    <>
      <h1 style={{ color: "#224E39" }}>¿Qué es la ELA?</h1>
      <br />
      <p className="captionCausa">
        La Esclerosis Lateral Amiotrófica (ELA) es una enfermedad
        neurodegenerativa rápidamente progresiva. Caracterizada por una pérdida
        gradual de las neuronas motoras (o motoneuronas) superiores e
        inferiores. Estas motoneuronas, que controlan el movimiento de la
        musculatura voluntaria; disminuyen gradualmente su funcionamiento y
        mueren. <br/> <br/> La consecuencia de la desaparición de las neuronas motoras en la
        corteza cerebral; tronco del encéfalo y médula es una debilidad muscular
        que avanza amenazando gravemente la autonomía motora; la comunicación
        oral, la deglución y la respiración. Es decir, los pacientes comienzan a
        tener problemas en funciones básicas como caminar, tragar, hablar o
        levantarse de la cama.
      </p>
      <br />
      <h2 style={{ color: "#224E39" }}>Causas</h2>
      <br />
      <Container>
        <Row>
          <Col xs={8}>
            <h3 style={{ color: "#224E39", marginLeft: '-15px' }}>Investigación</h3>
          </Col>
          <Col xs={4}>
            <a href="/causa/investigacion">Saber más</a>
          </Col>
        </Row>
      </Container>
      <div>
        <Media>
          <img
            width={64}
            height={64}
            className="align-self-start mr-3"
            src={investigacionFoto}
            alt="investigacion"
          />
          <Media.Body>
            <p className="captionCausa">
              Desarrollamos programas de investigación, organizamos foros
              científicos y jornadas de divulgación.
            </p>
          </Media.Body>
        </Media>
      </div>

      <Container>
        <Row>
          <Col xs={8}>
            <h3 style={{ color: "#224E39", marginLeft: '-15px' }}>Calidad de vida ELA</h3>
          </Col>
          <Col xs={4}>
            <a href="/causa/calidaddevidaela">Saber más</a>
          </Col>
        </Row>
      </Container>
      <Media>
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src={calidadFoto}
          alt="calidad"
        />
        <Media.Body>
          <p className="captionCausa">
            Promovemos un nuevo modelo de asistencia en ELA para integar las
            necesidades sociales y de salud de los pacientes.
          </p>
        </Media.Body>
      </Media>

      <Container>
        <Row>
          <Col xs={8}>
            <h3 style={{ color: "#224E39", marginLeft: '-15px' }}>Visibilidad</h3>
          </Col>
          <Col xs={4}>
            <a href="/causa/visibilidad">Saber más</a>
          </Col>
        </Row>
      </Container>

      <Media>
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src={visibilidadFoto}
          alt="visibilidad"
        />
        <Media.Body>
          <p className="captionCausa">
            Cada 21 de junio edificios de cientos de municipios de España se
            iluminan de verde en apoyo a los enfermos de ELA.
          </p>
        </Media.Body>
      </Media>
    </>
  );
};

export default CausasScreen;
