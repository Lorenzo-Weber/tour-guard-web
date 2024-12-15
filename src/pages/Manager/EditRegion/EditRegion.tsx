import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ManagerHeader from "../../../components/ManagerHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const EditRegion = () => {
  const [description, setDescription] = useState("");
  const [isAddingFact, setIsAddingFact] = useState(false);
  const [facts, setFacts] = useState<any>([]);
  const [factTitle, setFactTitle] = useState("");
  const [factDescription, setFactDescription] = useState("");

  const { id, mineId } = useParams();

  useEffect(() => {
    async function loadRegion() {
      try {
        // carregando os dados da região
        const { data } = await api.get(
          `/manager/mines/${mineId}/regions/${id}`
        );
        console.log(data);
        setDescription(data.region.description);
      } catch (err) {
        console.error(err);
      }
    }

    loadRegion();
  }, [id, mineId]);

  useEffect(() => {
    async function loadFacts() {
      try {
        // carregando os fatos da região
        const { data } = await api.get(`/manager/regions/${id}/facts`);
        setFacts(data.facts);
      } catch (err) {
        console.error(err);
      }
    }

    loadFacts();
  }, [id]);

  const handleSaveFact = async () => {
    try {
      const model = { title: factTitle, description: factDescription };
      await api.post(`/manager/regions/${id}/facts`, model);
      alert("Fato adicionado com sucesso!");
      setIsAddingFact(false);
      setFacts([...facts, model]);
      setFactTitle("");
      setFactDescription("");
    } catch (err) {
      console.error(err);
      alert("Erro ao adicionar fato!");
    }
  };

  const handleRemoveFact = async (factId: any) => {
    try {
      await api.delete(`/manager/facts/${factId}`);
      setFacts(facts.filter((fact: any) => fact.id !== factId));
    } catch (err) {
      console.error(err);
      alert("Erro ao remover fato!");
    }
  };

  return (
    <Container>
      <ManagerHeader />

      <Container className="py-4 px-5">
        <h1>Editar região</h1>

        <div
          style={{
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            marginBottom: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h2>Descrição</h2>
          <p>{description}</p>
        </div>

        <h2>Fatos</h2>
        <Container className="d-flex flex-wrap justify-content-start">
          {facts?.map((fact: any, index: any) => (
            <Card
              key={index}
              className="mb-3 mx-2 shadow-sm"
              style={{ minWidth: "250px", maxWidth: "300px" }}
            >
              <Card.Body>
                <Card.Title>{fact.title}</Card.Title>
                <Card.Text></Card.Text>
                <Card.Text>{fact.description}</Card.Text>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleRemoveFact(fact.id)}
                >
                  Remover
                </Button>
              </Card.Body>
            </Card>
          ))}

          {isAddingFact ? (
            <Card
              className="mb-3 shadow-sm"
              style={{ minWidth: "250px", maxWidth: "300px" }}
            >
              <Card.Body>
                <Form.Group>
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    placeholder="Título"
                    value={factTitle}
                    onChange={(e) => setFactTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Descrição"
                    value={factDescription}
                    onChange={(e) => setFactDescription(e.target.value)}
                  />
                </Form.Group>
                <Row className="mt-3 d-flex flex-row">
                  <Col md={6}>
                    <Button
                      variant="danger"
                      className="ms-2"
                      onClick={() => setIsAddingFact(false)}
                    >
                      Cancelar
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button onClick={() => handleSaveFact()}>Adicionar</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ) : (
            <Card
              className="mb-3 mx-2 shadow-sm"
              style={{
                minWidth: "250px",
                maxWidth: "300px",
                minHeight: "200px",
                cursor: "pointer",
                border: "2px dashed #ccc",
              }}
            >
              <Card.Body
                className="d-flex justify-content-center align-items-center"
                onClick={() => setIsAddingFact(true)}
              >
                <h1 className="text-muted">+</h1>
              </Card.Body>
            </Card>
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default EditRegion;
