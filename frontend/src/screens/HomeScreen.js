import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
// import Reto from '../components/Reto'


const HomeScreen = () => {
    const [retos, setRetos] = useState([])

    useEffect( () => {
        const fetchRetos = async () =>{
            const { data } = await axios.get('/api/retos')

            setRetos(data)
        }

        fetchRetos()

    }, [])

    return (
        <>
            <h1>Últimos retos</h1>
                <Row>
                </Row>  
        </>
    )
}

export default HomeScreen
