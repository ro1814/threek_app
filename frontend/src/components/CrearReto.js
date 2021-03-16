import React from 'react'
import { Card, Row, Col, ListGroup, Button} from 'react-bootstrap'

const CrearReto = () => {
    return<>
    <Row>
        <Col md={3}>
        <Card>
        <ListGroup variant="flush">
        
        <Button type='submit' variant='primary'>Crear reto</Button>
        
        </ListGroup>
        </Card>
        </Col>
    </Row>
    </>
}

export default CrearReto
