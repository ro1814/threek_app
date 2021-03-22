import React, { useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Modal } from "react-bootstrap";
import RetoSteps from "../../components/RetoSteps";
import { saveImagenReto } from "../../actions/retoActions";

const ImagenReto = ({ history }) => {
  const retoSave = useSelector((state) => state.retoSave);
  const { datosSocial } = retoSave;

  const [imagen, setImagen] = useState('', datosSocial.imagen);
  const [videoURL, setVideoUrl] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("imagen", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImagen(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveImagenReto({ videoURL, socialMedia }));
    history.push('/reto/6051f46d192de50d7778e961')
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <FormContainer>
      <RetoSteps step1 step2 step3 step4 />

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="imagen">
          <Form.Label>Sube una foto que servirá de portada*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enlace de imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          ></Form.Control>
          <Form.File
            id="image-file"
            label="Choose File"
            custom
            onChange={uploadFileHandler}
          ></Form.File>
          {uploading && <Loader />}
        </Form.Group>

        <Form.Group controlId="videoURL">
          <Form.Label>¿Tienes un vídeo?</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL vídeo YouTube"
            value={videoURL}
            onChange={(e) => setVideoUrl(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="socialMedia">
          <Form.Label>Comaparte las redes sociales del reto</Form.Label>
          <Container>
            <Form.Control
              type="text"
              placeholder="URL de Facebook"
              value={socialMedia}
              onChange={(e) => setSocialMedia(e.target.value)}
            ></Form.Control>
          </Container>
          <br />
          <Container>
            <Form.Control
              type="text"
              placeholder="URL de Instagram"
            ></Form.Control>
          </Container>
        </Form.Group>

        <Button block type="button" variant="primary" onClick={handleShow}>
        Siguiente
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <strong>¡Enhorabuena! <br/> ¡Tu reto ha sido creado!</strong> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Resúmen de tu reto:</strong><br/>
          Título de reto: <strong>"Correr por Madrid".</strong> <br/>
          Con fecha de inicio: <strong> 25/03/2021.</strong> <br/>
          Objetivo de recaudación: <strong>€1.200.</strong> 
        </Modal.Body>
        <Modal.Body>
          Hay 13 personas más que han creado un reto a la vez que el tuyo, ¿serás capaz de llegar al objetivo antes que ellos?
        </Modal.Body>
        <Modal.Body>
          Empieza a compartir tu reto con todos tus amigos y consigue esponsors antes que nadie.
        </Modal.Body>
        <Modal.Body>
          Links social media, iconos.
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit 'variant="primary" onClick={submitHandler}>Ver página de reto</Button>
        </Modal.Footer>
      </Modal>

      </Form>
    </FormContainer>
  );
};

export default ImagenReto;
