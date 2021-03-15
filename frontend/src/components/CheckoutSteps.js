import React from 'react'
import { Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/sponsor/:id'>
                        <Nav.Link>Importe</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled> Importe
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/sponsorinfo'>
                        <Nav.Link>Registro</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled> Registo
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>Información de pago</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled> Información de pago
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>Resúmen de esponsor</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled> Resúmen de esponsor
                    </Nav.Link>}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
