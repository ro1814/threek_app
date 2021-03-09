import React, { useState, useEffect } from 'react'
import { Link } from 'ract-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import axios from 'axios'

const RetoScreen = ({ match }) => {
    const [reto, setReto] = useState({ match })

    useEffect( () => {
        const fetchReto = async () =>{
            const { data } = await axios.get(`/api/retos/${match.params.id}`)

            setReto(data)
        }

        fetchReto()

    }, [match])

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Regresar
            </Link>
            <Row>
                <Col>
                    <Image src={reto.image} alt={reto.name} fluid />
                </Col>
            </Row>
            
        </>
    )
}

export default RetoScreen
