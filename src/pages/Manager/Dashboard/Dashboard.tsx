import Header from "../../../components/ManagerHeader";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const DashboardManager: React.FC = () => {
  return (
    <div>
      <Header />
      <Container className="py-4">
        <h1>Olá, User</h1>
        <div className="my-4">
          <div className="d-flex justify-content-start mb-4">
            <Button variant="link" className="mx-2">Hoje</Button>
            <Button variant="link" className="mx-2">Ontem</Button>
            <Button variant="link" className="mx-2">Esta semana</Button>
            <Button variant="link" className="mx-2">Este mês</Button>
          </div>
          <Row className="g-4">
            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Ocupado/Não Ocupado 1</Card.Title>
                  <div className="graph">
                    <div className="example" style={{ height: "150px", backgroundColor: "lightgrey" }}></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Teste 2</Card.Title>
                  <div className="graph">
                    <div className="example" style={{ height: "150px", backgroundColor: "lightgrey" }}></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Teste 3</Card.Title>
                  <div className="graph">
                    <div className="example" style={{ height: "150px", backgroundColor: "lightgrey" }}></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <h2>Terão X gráficos dependendo do filtro selecionado, implementei display:grid para facilitar o posicionamento dos gráficos</h2>
    </div>
  );
};

export default DashboardManager;
