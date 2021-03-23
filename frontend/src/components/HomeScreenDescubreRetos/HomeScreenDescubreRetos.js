import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import HomeScreenDescubreRetosRetoActivoImg from "../../assets/images/HomeScreenImages/HomeScreenDescubreRetosRetoActivoImg.png";
import "./HomeScreenDescubreRetos.css";

const HomeScreenDescubreRetos = ({ reto }) => {
  // const userLogin = useSelector( state => state.userLogin)
  // const { userInfo } = userLogin

  return (
    <>
      <figure className="position-relative HomeScreenDescubreRetosFigure">
        <div className="overlay-div"></div>
        <img
          src={reto.imagen}
          alt="retoImagen"
          className="card-img embed-responsive-item HomeScreenDescubreRetosImg"
        />
        <figcaption className="HomeScreenDescubreRetosRetoActivoText">
          Reto Activo
        </figcaption>
        <img
          src={HomeScreenDescubreRetosRetoActivoImg}
          alt="HomeScreenDescubreRetosRetoActivoImg"
          className="img-fluid HomeScreenDescubreRetosRetoActivoImg"
        />
        <figcaption className="HomeScreenDescubreRetosRetadorNameText">
          Manel A.{/* {userInfo.nombre} */}
        </figcaption>
        <figcaption className="HomeScreenDescubreRetosRetoTituloText">
          {reto.titulo}
        </figcaption>
        <figcaption className="HomeScreenDescubreRetosRetoObjetivoRecText">
          Objetivo {reto.objetivoRec}€
        </figcaption>
        <figcaption className="HomeScreenDescubreRetosRetoFechaInicioText">
          Inicio {reto.fechaInicio}
        </figcaption>
        <LinkContainer to={`/reto/${reto._id}`}>
          <Button
            type="submit"
            className="HomeScreenDescubreRetosRetoBtn1"
          >
            <figcaption className="HomeScreenDescubreRetosRetoBtn1Text">
              Patrocinar Reto
            </figcaption>
          </Button>
        </LinkContainer>
      </figure>
    </>
  );
};

export default HomeScreenDescubreRetos;
