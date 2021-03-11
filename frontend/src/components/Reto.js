import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Reto = ({ reto }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/reto/${reto._id}`}>
                <Card.Img src={reto.imagen} variant='top' />
            </Link>

        <Card.Body>
            <Link to={`/reto/${reto._id}`}>
                <Card.Title as="div"><strong>{reto.nombre}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div'>
                <div className="my-3">
                    Objetivo a recaudar: €{reto.objetivoRec} 
                </div>
            </Card.Text>

            <Card.Text as='h5'>Descripción del reto: {reto.desc}

            </Card.Text>
        </Card.Body>
       </Card>
    )
}

export default Reto
