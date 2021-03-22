import React from "react";
import investigacionFoto from "../assets/causa/investigacion.png";
import calidadFoto from "../assets/causa/calidad-vida.png";
import visibilidadFoto from "../assets/causa/visibilidad.png";
import { Media, Card, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-bootstrap";

const CausasScreen = () => {
  return (
    <>
      <h1>¿Qué es la ELA?</h1>
      <br />
      <Accordion>
        <p className="captionCausa">
          La Esclerosis Lateral Amiotrófica (ELA) es una enfermedad
          neurodegenerativa rápidamente progresiva. Caracterizada por una
          pérdida gradual de las neuronas motoras (o motoneuronas) superiores e
          inferiores.
        </p>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Saber más...
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p className="captionCausa">
              Estas motoneuronas, que controlan el movimiento de la musculatura
              voluntaria; disminuyen gradualmente su funcionamiento y mueren. La
              consecuencia de la desaparición de las neuronas motoras en la
              corteza cerebral; tronco del encéfalo y médula es una debilidad
              muscular que avanza amenazando gravemente la autonomía motora; la
              comunicación oral, la deglución y la respiración. Es decir, los
              pacientes comienzan a tener problemas en funciones básicas como
              caminar, tragar, hablar o levantarse de la cama.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
      <h2>Nuestras causas</h2>

      <h3>Investigación</h3>
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
      <br />
      <h3>Calidad de vida ELA</h3>
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
      <br />
      <h3>Visibilidad</h3>
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
