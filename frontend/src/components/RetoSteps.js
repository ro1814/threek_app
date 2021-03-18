import React from 'react'
import { Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const RetoSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/crearretodeporte'>
                        <Nav.Link>Deporte</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled> Deporte
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/crearretocausa'>
                        <Nav.Link>Causa</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled> Causa
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/crearreto'>
                        <Nav.Link>Crear reto</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled> Crear reto
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/crearretoconfirmacion'>
                        <Nav.Link>¡Listo!</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled> ¡Listo!
                    </Nav.Link>}
            </Nav.Item>
        </Nav>
    )
}

export default RetoSteps
