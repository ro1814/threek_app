import React from "react";
import {
  Row,
  Col,
  Image,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./RankingScreen.css";
//imagenes
//import ScreenSearchBar from "../assets/images/RankingScreenImages/RankingRetadoresSearchBar.png";
import IconoBuscar from "../assets/images/Icons/IconoBuscar.png";
import RankingRetadores from "../assets/images/RankingScreenImages/RankingRetadores.png";

const RankingScreen = () => {
  return (
    <>
      <Row>
        <Col>
          <h2 className="RankingScreenTitle">Ranking de retadores</h2>
          <Form>
            <InputGroup className="RankingScreenSearchBar">
              <FormControl
                type="text"
                placeholder="Busca retador"
                className="RankingScreenSearchText"
              />
            </InputGroup>
          </Form>
          {/* <Image src={ScreenSearchBar} alt="ScreenSearchBar" className="RankingScreenSearchBar"/>
          <p className="RankingScreenSearchText">Busca retador</p> */}
          <Image
            src={IconoBuscar}
            alt="IconoBuscar"
            className="RankingScreenSearchIcon"
          />
          <Image
            src={RankingRetadores}
            alt="RankingRetadores"
            className="RankingRetadoresBody"
          />
        </Col>
      </Row>
    </>
  );
};

export default RankingScreen;
