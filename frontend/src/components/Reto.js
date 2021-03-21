import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { useSelector } from "react-redux";
// import descubreRetosImg from "../assets/images/descubreRetosImg.png";
import descubreRetosRetoActivoImg from "../assets/images/descubreRetosRetoActivoImg.png";
import "../index.css";

const Reto = ({ reto }) => {
  // const userLogin = useSelector( state => state.userLogin)
  // const { userInfo } = userLogin

  return (
    <>
      {/* //!HOME: Descubre todos los retos */}
      <figure className="position-relative descubreRetosFigure">
        <img
          src={reto.imagen}
          alt="retoImagen"
          className="card-img embed-responsive-item descubreRetosImg"
        />
        <figcaption className="descubreRetosRetoActivoText">
          Reto Activo
        </figcaption>
        <img
          src={descubreRetosRetoActivoImg}
          alt="descubreRetosRetoActivoImg"
          className="img-fluid descubreRetosRetoActivoImg"
        />
        <figcaption className="descubreRetosRetadorNameText">
          Manel A.{/* Creado por: {userInfo.nombre} */}
        </figcaption>
        <figcaption className="descubreRetosRetoTituloText">
          {reto.titulo}
        </figcaption>
        <figcaption className="descubreRetosRetoObjetivoRecText">
          Objetivo {reto.objetivoRec} €
        </figcaption>
        <figcaption className="descubreRetosRetoFechaInicioText">
          Inicio {reto.fechaInicio}
        </figcaption>
        {/* //!Seguramente haya que cambiar el siguiente to={} a la pagina de /sponsor/:id */}
        <LinkContainer to={`/reto/${reto._id}`}>
          <Button
            type="submit"
            className="descubreRetosRetoBtn"
            variant="danger"
          >
            <figcaption className="descubreRetosRetoBtnText">
            Patrocinar Reto
            </figcaption>
          </Button>
        </LinkContainer>
      </figure>
    </>
  );
};

export default Reto;
