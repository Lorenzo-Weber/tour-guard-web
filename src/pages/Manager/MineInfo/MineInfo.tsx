import { useNavigate, useParams } from "react-router-dom";
import ManagerHeader from "../../../components/ManagerHeader";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import api from "../../../services/api";

const MineInfo = () => {
  const [regions, setRegions] = useState<any[]>([]);
  const [mine, setMine] = useState<any>({});
  const [isAddingRegion, setIsAddingRegion] = useState(false);
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadMine() {
      try {
        const { data } = await api.get(`/manager/mines/${id}`);
        setMine(data.mine || {});
      } catch (err) {
        console.error(err);
      }
    }

    loadMine();
  }, [id]);

  useEffect(() => {
    async function loadRegions() {
      try {
        const { data } = await api.get(`/manager/mines/${id}/regions`);
        setRegions(data.regions || []);
      } catch (err) {
        console.error(err);
      }
    }

    loadRegions();
  }, [id]);

  const handleAddRegion = async () => {
    try {
      const model = { description };
      await api.post(`/manager/mines/${id}/regions`, model);
      alert("Região adicionada com sucesso!");
      setIsAddingRegion(false);
      setDescription("");
      setRegions([...regions, model]);
    } catch (err) {
      console.error(err);
      alert("Erro ao adicionar região!");
    }
  };

  const handleCancelAddRegion = () => {
    setDescription("");
    setIsAddingRegion(false);
  };

  return (
    <>
      <ManagerHeader />

      <Container className="m-4">
        <h1 className="text-center mb-4">Informações da Mina</h1>

        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title className="h4">{mine.name}</Card.Title>
            <Card.Text>{mine.description}</Card.Text>
            <Card.Text>
              <strong>Localização:</strong> {mine.location}
            </Card.Text>
          </Card.Body>
        </Card>

        <h2 className="mb-3">Regiões</h2>

        <Container className="d-flex flex-wrap justify-content-start">
          {regions.map((region: any, index) => (
            <Card
              key={region.id}
              className="mb-3 mx-2 shadow-sm"
              style={{ minWidth: "250px", maxWidth: "300px" }}
            >
              <Card.Body>
                <Card.Title>Região {index + 1}</Card.Title>
                <Card.Text>{region.description}</Card.Text>

                <Row>
                  <Col md={6}>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={async () => {
                        try {
                          await api.delete(`/manager/regions/${region.id}`);
                          alert("Região removida com sucesso!");
                          setRegions(regions.filter((r) => r.id !== region.id));
                        } catch (err) {
                          console.error(err);
                          alert("Erro ao remover região!");
                        }
                      }}
                    >
                      Remover
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() =>
                        navigate(`/manager/mines/${id}/regions/${region.id}`)
                      }
                    >
                      Editar
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

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
            {isAddingRegion ? (
              <Card.Body>
                <Form className="w-100">
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      type="text"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      placeholder="Digite a descrição da região"
                    />
                  </Form.Group>

                  <div className="d-flex flex-column">
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={handleCancelAddRegion}
                    >
                      Cancelar
                    </Button>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={handleAddRegion}
                    >
                      Adicionar
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            ) : (
              <Card.Body
                className="d-flex justify-content-center align-items-center"
                onClick={() => setIsAddingRegion(true)}
              >
                <h1 className="text-muted">+</h1>
              </Card.Body>
            )}
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default MineInfo;
