import React, { useEffect, useState } from "react";
import Header from "../../../components/ManagerHeader";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardManager: React.FC = () => {
  const [regions, setRegions] = useState<{ name: string; maxLoad: number }[]>([]);
  const [currentLoad, setCurrentLoad] = useState<number[]>([]);

  // Função para buscar informações das regiões do backend
  const fetchRegions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/mina/regioes"); // Altere para o endpoint correto
      const data = await response.json();
      return data.regions; // Assumindo que o backend retorna { regions: [{ name: 'Região 1', maxLoad: 600 }, ...] }
    } catch (error) {
      console.error("Erro ao buscar informações das regiões:", error);
      return [];
    }
  };

  // Inicializa os dados das regiões
  const initializeData = (regionsData: { name: string; maxLoad: number }[]) => {
    const currentLoads = regionsData.map(({ maxLoad }) =>
      Math.floor(Math.random() * ((maxLoad / 2) - 100 + 1)) + 100
    );
    setRegions(regionsData);
    setCurrentLoad(currentLoads);
  };

  // Atualiza as lotações atuais a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoad((prevLoads) =>
        prevLoads.map((load, index) => {
          const change = Math.floor(Math.random() * 7) - 3; // Incremento aleatório entre -3 e 3
          const updatedLoad = load + change;
          return Math.max(0, Math.min(updatedLoad, regions[index].maxLoad)); // Garante que está no intervalo válido
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [regions]);

  // Busca as informações das regiões ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      const regionsData = await fetchRegions();
      initializeData(regionsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Container className="mt-4">
        <h2 className="text-center mb-4">Dashboard de Regiões</h2>
        <Row>
          {regions.map((region, index) => {
            const load = currentLoad[index] || 0;
            const available = region.maxLoad - load;

            const data = {
              labels: ["Ocupado", "Disponível"],
              datasets: [
                {
                  data: [load, available],
                  backgroundColor: ["#FF6384", "#36A2EB"],
                  hoverBackgroundColor: ["#FF6384", "#36A2EB"],
                },
              ],
            };

            return (
              <Col
                key={index}
                xl={3} // Quatro gráficos por linha em telas grandes
                lg={4} // Três gráficos por linha em telas médias
                md={6} // Dois gráficos por linha em telas pequenas
                sm={12} // Um gráfico por linha em telas muito pequenas
                className="mb-4"
              >
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title className="text-center">{region.name}</Card.Title>
                    <div
                      style={{
                        height: "200px",
                        width: "200px",
                        margin: "0 auto",
                      }}
                    >
                      <Pie data={data} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default DashboardManager;
