import React from "react";
import { Image} from "react-bootstrap";
import investigacionMedFoto from "../assets/causa/investigacionMed.png";
import totalRec from "../assets/causa/totalrec.png";
import graficaInvestigacion from "../assets/causa/graficainvestigacion.png";

const Investigacion = () => {
  return (
    <>
      <h1 style={{ color: "#224E39" }}>Investigación</h1>
      <Image
        src={investigacionMedFoto}
        style={{ marginTop: "15px", marginLeft: "30px", marginBottom: "16px" }}
        fluid
      />
      <br/>
      <div>
        <br/>
      <p className="captionCausa">
        La ELA es una enfermedad que actualmente no tiene una terapia que haya
        demostrado resultar efectiva más allá del Riluzol, cuyo uso se aprobó ya
        en 1996. El único camino para conseguir cambiar esto es potenciar la
        investigación de calidad. <br/> Desde la Fundación Luzón consideramos, como
        pilar fundamental de nuestro trabajo, el promover esta investigación de
        excelencia en el ámbito de la ELA. Trabajamos para fomentar e impulsar
        la labor de los investigadores, promover las colaboraciones entre ellos,
        potenciar la realización de ensayos clínicos y divulgar los resultados
        científicos. Desarrollamos programas de investigación, organizamos foros
        científicos y jornadas de divulgación.
      </p>
      <Image
        src={totalRec}
        style={{ marginTop: "15px", marginLeft: "30px", marginBottom: "16px" }}
        fluid
      />
      <Image
        src={graficaInvestigacion}
        style={{ marginTop: "15px", marginLeft: "10px", marginBottom: "16px" }}
        fluid
      />
      </div>
    
    </>
  );
};

export default Investigacion;
