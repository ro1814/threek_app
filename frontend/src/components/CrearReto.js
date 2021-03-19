import React from 'react'
import { Card, Row, Col, ListGroup, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CrearReto = () => {
    return<>
    <Row>
        <Col md={3}>
        <Card>
        <ListGroup variant="flush">
        
        <LinkContainer to='/crearnuevoreto'><Button type='submit' variant='primary'>Crear reto</Button></LinkContainer>
        
        </ListGroup>
        </Card>
        </Col>
    </Row>
    </>
}

export default CrearReto
