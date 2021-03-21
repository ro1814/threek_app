import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import {
  Form,
  Button,
  FormLabel,
  Image,
  Row,
  Col
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import RetoSteps from "../../components/RetoSteps";
import { saveCausaReto } from "../../actions/retoActions";

const CausaScreen = ({ history }) => {
  const retoSave = useSelector((state) => state.retoSave);
  const { selecCausa } = retoSave;

  const [investigacion, setInvestigacion] = useState(selecCausa.ivestigacion);
  const [calVida, setCalVida] = useState(selecCausa.calVida);
  const [monitorizacion, setMonitorizacion] = useState(
    selecCausa.monitorizacion
  );

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveCausaReto({ investigacion, calVida, monitorizacion }))
    history.push("/crearreto");
  };
  return (
    <FormContainer>
      <RetoSteps step1 step2 />

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="causa">
          <FormLabel>
            ¿A qué área de la enfermedad ELA quiere destinar las donaciones?
          </FormLabel>

          <FormContainer>
            <Row>
              <Col xs={2}>
                <Image
                  src="https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2"
                  fluid
                ></Image>
              </Col>
              <Col xs={8}>
                <FormLabel>Investigación</FormLabel>
                <p className="parInv">
                  Desarrollamos programas de investigación, organizamos foros científicos y jornadas de divulgación.
                </p>
              </Col>
              <Col xs={1}>

                <Form.Check 
                id="investigacion"
                name="investigacion"
                value="investigacion"
                size="sm"
                onChange={(e) => setInvestigacion(e.target.value)}
                type="checkbox">
              </Form.Check>
              
              </Col>
              
              </Row>

              <Row>
              <Col xs={2}>
                <Image
                  src="https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2"
                  fluid
                ></Image>
              </Col>
              <Col xs={8}>
                <FormLabel>Calidad de Vida ELA</FormLabel>
                <p className="parInv">
                  Promovemos un nuevo modelo de asistencia en ELA para integrar las necesidades sociales y de salud de los pacientes.
                </p>
              </Col>
              <Col xs={1}>

                <Form.Check 
                id="calVida"
                name="calVida"
                value="calidad de vida"
                size="sm"
                onChange={(e) => setCalVida(e.target.value)}
                type="checkbox">
              </Form.Check>
              
              </Col>
              
              </Row>

              <Row>
              <Col xs={2}>
                <Image
                  src="https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2"
                  fluid
                ></Image>
              </Col>
              <Col xs={8}>
                <FormLabel>Visibilidad</FormLabel>
                <p className="parInv">
                  Cada 21 de junio edificios de cientos de municipios de España se iluminan de verde en apoto a los enfermos de ELA.
                </p>
              </Col>
              <Col xs={1}>

                <Form.Check 
                id="monitorizacion"
                name="monitorizacion"
                value="monitorizacion"
                size="sm"
                onChange={(e) => setMonitorizacion(e.target.value)}
                type="checkbox">
              </Form.Check>
              
              </Col>
              
              </Row>

          </FormContainer>
        </Form.Group>
        <Button block type="submit" variant="primary">
          Continue</Button>
      </Form>
    </FormContainer>
  );
};

export default CausaScreen;
