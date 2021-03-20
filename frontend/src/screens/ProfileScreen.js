import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";

const ProfileScreen = ({ location, history }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [primApellido, setPrimApellido] = useState('');
  const [segApellido, setSegApellido] = useState('');
  const [genero, setGenero] = useState('');
  const [fecNac, setFecNac] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
        if (!user || !user.nombre) {
            dispatch(getUserDetails('profile'))
        } else {
            setAvatar(user.avatar)
            setNombre(user.nombre)
            setPrimApellido(user.primApellido)
            setSegApellido(user.segApellido)
            setGenero(user.genero)
            setFecNac(user.fecNac)
            setDni(user.dni)
            setDireccion(user.direccion)
            setCity(user.city)
            setPostalCode(user.postalCode)
            setCountry(user.country)
            setEmail(user.email)
        }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword) {
        setMessage('Las contraseñas no coinciden')
    } else {
    dispatch(updateUserProfile({ id: user._id, nombre, email, password, avatar, primApellido, segApellido, genero, fecNac, dni, direccion, city, postalCode, country }))
  }
}

  return <Row>
      <Col md={3}>
      <h2>Mi Perfil</h2>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">Perfil actualizado!</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>

      <Form.Group controlId="avatar">
          <Form.Label>Foto de Perfil</Form.Label>
          <Form.Control
            type="avatar"
            placeholder="foto de perfil aqui"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="nombre"
            placeholder="Escriba su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="primApellido">
          <Form.Label>Primer Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Primer Apellido"
            value={primApellido}
            onChange={(e) => setPrimApellido(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="segApellido">
          <Form.Label>Segundo Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Segundo Apellido"
            value={segApellido}
            onChange={(e) => setSegApellido(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="genero">
          <Form.Label>Genero</Form.Label>
          <Form.Control
            type="text"
            placeholder="Genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="fecNac">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Fecha de nacimiento"
            value={fecNac}
            onChange={(e) => setFecNac(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="dni">
          <Form.Label>DNI/NIE</Form.Label>
          <Form.Control
            type="text"
            placeholder="DNI/NIE"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="direccion">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Código postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Código postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            placeholder="País"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Escriba su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Escriba su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirme su contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme su contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="Primary-button">
          Actualizar perfil
        </Button>
      </Form>
      </Col>
      <Col md={9}>
          <h2>Mis retos</h2>
      </Col>
  </Row>
};

export default ProfileScreen
