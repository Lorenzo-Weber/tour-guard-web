import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import api from "../../../services/api";
import { Container, Row, Col, Card } from "react-bootstrap";

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
      <Header />

      {/* Container com listagem das minas em cards */}
      <Container className="py-4">
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
