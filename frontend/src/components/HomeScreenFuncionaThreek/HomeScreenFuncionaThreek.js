import React from "react";
import { Card, Row, Col, Container, Carousel } from "react-bootstrap";
import HomeScreenFuncionaThreekCardBodyImg1 from "../../assets/images/HomeScreenImages/HomeScreenFuncionaThreekCardBodyImg1.png";
import HomeScreenFuncionaThreekCardBodyImg2 from "../../assets/images/HomeScreenImages/HomeScreenFuncionaThreekCardBodyImg2.png";
import HomeScreenFuncionaThreekCardBodyImg3 from "../../assets/images/HomeScreenImages/HomeScreenFuncionaThreekCardBodyImg3.png";
import "./HomeScreenFuncionaThreek.css";

const HomeScreenFuncionaThreek = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="HomeScreenFuncionaThreekH2Text">
              ¿Cómo funciona threek?
            </h2>
            <Carousel
              className="HomeScreenFuncionaThreekCarousel"
              nextIcon={false}
              prevIcon={false}
              indicators={false}
            >
              <Carousel.Item className="HomeScreenFuncionaThreekCarouselItem">
                <Card
                  text="white"
                  className="HomeScreenFuncionaThreekCard text-center p-3"
                >
                  <blockquote className="blockquote mb-0 card-body">
                    <h2 className="HomeScreenFuncionaThreekCardH2Text">
                      Crea tu reto de 3 semanas
                    </h2>
                    <p className="HomeScreenFuncionaThreekCardBodyText">
                      En Threek tienes 21 días para ponerte al límite mientras
                      ayudas a cambiar la vida de otros. Natación, running,
                      treking, escalada o ciclismo ¡tú eliges como quieres
                      superarte!
                    </p>
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg1}
                      alt="HomeScreenFuncionaThreekCardBodyImg1"
                      className="HomeScreenFuncionaThreekCardBodyImg1"
                    />
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg2}
                      alt="HomeScreenFuncionaThreekCardBodyImg2"
                      className="HomeScreenFuncionaThreekCardBodyImg2"
                    />
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg3}
                      alt="HomeScreenFuncionaThreekCardBodyImg3"
                      className="HomeScreenFuncionaThreekCardBodyImg3"
                    />
                  </blockquote>
                </Card>
              </Carousel.Item>
              <Carousel.Item className="HomeScreenFuncionaThreekCarouselItem">
                <Card
                  text="white"
                  className="HomeScreenFuncionaThreekCard text-center p-3"
                >
                  <blockquote className="blockquote mb-0 card-body">
                    <h2 className="HomeScreenFuncionaThreekCardH2Text">
                      Apoya la lucha contra la ELA
                    </h2>
                    <p className="HomeScreenFuncionaThreekCardBodyText">
                      Escoge la causa a la que quieres apoyar y gracias a
                      nuestro sistema de trazabilidad, controla el efecto que
                      tiene tu aportación.
                    </p>
                    {/* //!Esto habra de convertirse en un LINK a #aCausas o /aCausas */}
                    <p className="HomeScreenFuncionaThreekCard2FooterText">
                      Conoce las causas
                    </p>
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg1}
                      alt="HomeScreenFuncionaThreekCardBodyImg1"
                      className="HomeScreenFuncionaThreekCardBodyImg1"
                    />
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg2}
                      alt="HomeScreenFuncionaThreekCardBodyImg2"
                      className="HomeScreenFuncionaThreekCardBodyImg2"
                    />
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg3}
                      alt="HomeScreenFuncionaThreekCardBodyImg3"
                      className="HomeScreenFuncionaThreekCardBodyImg3"
                    />
                  </blockquote>
                </Card>
              </Carousel.Item>
              <Carousel.Item className="HomeScreenFuncionaThreekCarouselItem">
                <Card
                  text="white"
                  className="HomeScreenFuncionaThreekCard text-center p-3"
                >
                  <blockquote className="blockquote mb-0 card-body">
                    <h2 className="HomeScreenFuncionaThreekCardH2Text">
                      Comparte tus logros en redes
                    </h2>
                    <p className="HomeScreenFuncionaThreekCardBodyText">
                      Tú puedes ser el ejemplo que los de tu entorno necesitan
                      para superarse. Comparte tus logros en las redes sociales
                      y empujales a participar contigo
                    </p>
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg1}
                      alt="HomeScreenFuncionaThreekCardBodyImg1"
                      className="HomeScreenFuncionaThreekCardBodyImg1"
                    />
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg2}
                      alt="HomeScreenFuncionaThreekCardBodyImg2"
                      className="HomeScreenFuncionaThreekCardBodyImg2"
                    />
                    <img
                      src={HomeScreenFuncionaThreekCardBodyImg3}
                      alt="HomeScreenFuncionaThreekCardBodyImg3"
                      className="HomeScreenFuncionaThreekCardBodyImg3"
                    />
                  </blockquote>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreenFuncionaThreek;
