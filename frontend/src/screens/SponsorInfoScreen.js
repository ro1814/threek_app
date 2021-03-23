import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer";
import { saveVisitingSponsor } from '../actions/sponsorActions'
import CheckoutSteps from '../components/CheckoutSteps'
const SponsorInfoScreen = ({ history }) => {
    const sponsor = useSelector(state => state.sponsor)
    const { infoDonVisitante } = sponsor

    const [ nombre, setNombre] = useState(infoDonVisitante.nombre)
    const [ apellido, setApellido ] = useState(infoDonVisitante.apellido)
    const [ segApellido, setSegApellido] = useState(infoDonVisitante.segApellido)
    const [ email, setEmail ] = useState(infoDonVisitante.email)

    const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(saveVisitingSponsor({nombre, apellido, segApellido,
        email}))
            history.push('/payment')
    }

    return <FormContainer>
        
        
        <CheckoutSteps step1 step2/>
        <h3>Información personal de Visitante</h3>
        <Form onSubmit={submitHandler}>

        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escriba su nombre"
            value={infoDonVisitante.nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></Form.Control>
          </Form.Group>

          <Form.Group controlId="apellido">
          <Form.Label>Primer Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Primer Apellido"
            value={infoDonVisitante.apellido}
            onChange={(e) => setApellido(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="segApellido">
          <Form.Label>Segundo Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Segundo Apellido"
            value={infoDonVisitante.segApellido}
            onChange={(e) => setSegApellido(e.target.value)}
          ></Form.Control>
        </Form.Group>

          <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Escriba su email"
            value={infoDonVisitante.email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>Continue</Button>
        </Form>
    </FormContainer>
}

export default SponsorInfoScreen
