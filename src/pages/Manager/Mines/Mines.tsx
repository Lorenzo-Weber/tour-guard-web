import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ManagerHeader from "../../../components/ManagerHeader";

const Mines: React.FC = () => {
  const [mines, setMines] = useState<any[]>([]);

  useEffect(() => {
    async function loadMines() {
      try {
        const { data } = await api.get("/manager/mines");
        console.log(data);

        setMines(data.mines || []);
      } catch (err) {
        console.error(err);
      }
    }

    loadMines();
  }, []);

  return (
    <div>
      <ManagerHeader />

      {/* Container com listagem das minas em cards */}
      <Container className="py-4">
        <h1 className="mb-4">Suas Minas</h1>
        <Row className="g-4">
          {mines.map((mine: any) => (
            <Col key={mine.id} sm={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{mine.name}</Card.Title>
                  <Card.Text>{mine.description}</Card.Text>
                  <Card.Text>
                    <strong>Localização:</strong> {mine.location}
                  </Card.Text>
                  <Button href={`/manager/mines/${mine.id}`}>
                    Mais informações
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Mines;
