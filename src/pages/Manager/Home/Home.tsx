import Header from "../../../components/ManagerHeader";
import { useMockup } from "../../../Hooks/MockupContext";
import { useUser } from "../../../Hooks/UserContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeManager: React.FC = () => {
  const { fullest } = useMockup();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Container className="py-4">
        <h1 className="mb-4">Bem-vindo, {user?.full_name}</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Maior lotação</h3>
                    <p>Entrada</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Quantidade</h2>
                    <h2>{fullest}</h2>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Button 
                      variant="primary" 
                      onClick={() => navigate("/manager/Dashboard")}
                      style={{background:"blueviolet", color:"aliceblue", border:"none"}}
                    >
                      Ir para Dashboard
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeManager;
