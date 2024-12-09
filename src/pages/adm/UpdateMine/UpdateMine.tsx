import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import s from "./UpdateMine.module.css"; // Importando o módulo CSS
import Header from "../../../components/AdmHeader";
import api from "../../../services/api";

const UpdateMine = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [type, setType] = useState("");
  const [manager, setManager] = useState<any>();
  const [description, setDescription] = useState("");
  const [qrCode, setQrCode] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get(`admin/mines/${id}`);
        setName(data.name);
        setLocation(data.location);
        setFacebook(data.facebook);
        setInstagram(data.instagram);
        setDescription(data.description);
        setType(data.type);

        const response = await api.get(`/admin/manager/${data.admin_id}`);
        setManager(response.data.user);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const model = {
      name,
      location,
      facebook,
      instagram,
      description,
      type,
      // admin_id: 1,
    };

    try {
      await api.put(`/admin/mines/${id}`, model);
      navigate("/admin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <Container className="py-4">
        <h1>Atualizar Mina</h1>
        <Row>
          <Col md={8} className="mx-auto">
            <Form className={s.formContainer} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nome da Mina:</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Localização:</Form.Label>
                <Form.Control
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Facebook:</Form.Label>
                <Form.Control
                  id="facebook"
                  type="text"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Instagram:</Form.Label>
                <Form.Control
                  id="instagram"
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de Mina:</Form.Label>
                <Form.Control
                  id="type"
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descrição:</Form.Label>
                <Form.Control
                  id="description"
                  as="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>QR Code:</Form.Label>
                <Form.Control
                  id="qrCode"
                  type="text"
                  value={qrCode}
                  onChange={(e) => setQrCode(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Atualizar Mina
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateMine;
