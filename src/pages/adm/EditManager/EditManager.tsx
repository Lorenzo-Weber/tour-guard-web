import { Button, Container, Form } from "react-bootstrap";
import AdmHeader from "../../../components/AdmHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

const EditManager = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function loadManager() {
      try {
        const { data } = await api.get(`/admin/manager/${id}`);
        console.log(data);

        setName(data.user.full_name);
        setEmail(data.user.email);
      } catch (err) {
        console.error(err);
      }
    }

    loadManager();
  }, [id]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const model = {
        full_name: name,
        email,
      };
      await api.put(`/admin/manager/${id}`, model);
      alert("Gerenciador atualizado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao atualizar gerenciador!");
    }
  };

  return (
    <>
      <AdmHeader />
      <Container>
        <h1>Editar Gerenciador</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Button
            style={{ backgroundColor: "blueviolet", borderColor: "blueviolet" }}
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            Salvar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditManager;
