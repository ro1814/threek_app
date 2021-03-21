import React from "react";
import { Card, Row, Col, Container, Carousel } from "react-bootstrap";
import funcionaThreekCardBodyImg1 from "../assets/images/funcionaThreekCardBodyImg1.png";
import funcionaThreekCardBodyImg2 from "../assets/images/funcionaThreekCardBodyImg2.png";
import funcionaThreekCardBodyImg3 from "../assets/images/funcionaThreekCardBodyImg3.png";

const FuncionaThreek = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="funcionaThreekH2Text">¿Cómo funciona threek?</h2>
            <Carousel
              className="funcionaThreekCarousel"
              nextIcon=""
              prevIcon=""
              indicators=""
            >
              <Carousel.Item className="funcionaThreekCarouselItem">
                <Card
                  text="white"
                  className="funcionaThreekCard text-center p-3"
                >
                  <blockquote className="blockquote mb-0 card-body">
                    <h2 className="funcionaThreekCardH2Text">
                      Crea tu reto de 3 semanas
                    </h2>
                    <p className="funcionaThreekCardBodyText">
                      En Threek tienes 21 días para ponerte al límite mientras
                      ayudas a cambiar la vida de otros. Natación, running,
                      treking, escalada o ciclismo ¡tú eliges como quieres
                      superarte!
                    </p>
                    <img
                      src={funcionaThreekCardBodyImg1}
                      alt="funcionaThreekCardBodyImg1"
                      className="funcionaThreekCardBodyImg1"
                    />
                    <img
                      src={funcionaThreekCardBodyImg2}
                      alt="funcionaThreekCardBodyImg2"
                      className="funcionaThreekCardBodyImg2"
                    />
                    <img
                      src={funcionaThreekCardBodyImg3}
                      alt="funcionaThreekCardBodyImg3"
                      className="funcionaThreekCardBodyImg3"
                    />
                  </blockquote>
                </Card>
              </Carousel.Item>
              <Carousel.Item className="funcionaThreekCarouselItem">
                <Card
                  text="white"
                  className="funcionaThreekCard text-center p-3"
                >
                  <blockquote className="blockquote mb-0 card-body">
                    <h2 className="funcionaThreekCardH2Text">
                      Apoya la lucha contra la ELA
                    </h2>
                    <p className="funcionaThreekCardBodyText">
                      Escoge la causa a la que quieres apoyar y gracias a
                      nuestro sistema de trazabilidad, controla el efecto que
                      tiene tu aportación.
                    </p>
                    {/* //!Esto habra de convertirse en un LINK a #aCausas o /aCausas */}
                    <p className="funcionaThreekCard2FooterText">
                      Conoce las causas
                    </p>
                    <img
                      src={funcionaThreekCardBodyImg1}
                      alt="funcionaThreekCardBodyImg1"
                      className="funcionaThreekCardBodyImg1"
                    />
                    <img
                      src={funcionaThreekCardBodyImg2}
                      alt="funcionaThreekCardBodyImg2"
                      className="funcionaThreekCardBodyImg2"
                    />
                    <img
                      src={funcionaThreekCardBodyImg3}
                      alt="funcionaThreekCardBodyImg3"
                      className="funcionaThreekCardBodyImg3"
                    />
                  </blockquote>
                </Card>
              </Carousel.Item>
              <Carousel.Item className="funcionaThreekCarouselItem">
                <Card
                  text="white"
                  className="funcionaThreekCard text-center p-3"
                >
                  <blockquote className="blockquote mb-0 card-body">
                    <h2 className="funcionaThreekCardH2Text">
                      Comparte tus logros en redes
                    </h2>
                    <p className="funcionaThreekCardBodyText">
                      Tú puedes ser el ejemplo que los de tu entorno necesitan
                      para superarse. Comparte tus logros en las redes sociales
                      y empujales a participar contigo
                    </p>
                    <img
                      src={funcionaThreekCardBodyImg1}
                      alt="funcionaThreekCardBodyImg1"
                      className="funcionaThreekCardBodyImg1"
                    />
                    <img
                      src={funcionaThreekCardBodyImg2}
                      alt="funcionaThreekCardBodyImg2"
                      className="funcionaThreekCardBodyImg2"
                    />
                    <img
                      src={funcionaThreekCardBodyImg3}
                      alt="funcionaThreekCardBodyImg3"
                      className="funcionaThreekCardBodyImg3"
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

export default FuncionaThreek;
