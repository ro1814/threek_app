import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { listRetosDetails } from '../actions/retoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
const RetoScreen = ({ match }) => {
  const dispatch = useDispatch()

  const retoDetails = useSelector(state => state.retoDetails)
  const { loading, error, reto} = retoDetails

  useEffect(() => {
    dispatch(listRetosDetails(match.params.id))
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Regresar
      </Link>
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
         <Row>
         <Col md={6}>
           <Image src={reto.imagen} alt={reto.nombre} fluid />
         </Col>
 
         <Col md={3}>
           <ListGroup variant="flush">
             <ListGroup.Item>
               <h4>Título del reto: "{reto.titulo}"</h4>
               <h5>Objetivo de recaudación: €{reto.objetivoRec}</h5>
               <Link className="btn btn-light my-3" to="/PORDEFINIR">
                 Sponsorizar
               </Link>
               <p>Finaliza en: Faltan 3 días 4 horas </p>
               <p>Inicio: {reto.fechaInicio}, Fecha Fin</p>
             </ListGroup.Item>
             <ListGroup.Item>
                 <p>Descripción: {reto.desc}</p>
             </ListGroup.Item>
 
             <ListGroup.Item></ListGroup.Item>
           </ListGroup>
         </Col>
       </Row>
      )}
     
    </>
  )
}

export default RetoScreen
