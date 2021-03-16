import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useSelector } from "react-redux";

const Reto = ({ reto }) => {

    const userLogin = useSelector( state => state.userLogin)
    const { userInfo } = userLogin

    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/reto/${reto._id}`}>
                <Card.Img src={reto.imagen} variant='top' />
            </Link>

        <Card.Body>
            <Link to={`/reto/${reto._id}`}>
                <Card.Title as="div"><strong>Titulo del reto: {reto.titulo}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                <div className="my-3">
                    {/* Creado por: {userInfo.nombre} */}
                </div>
            </Card.Text>

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
