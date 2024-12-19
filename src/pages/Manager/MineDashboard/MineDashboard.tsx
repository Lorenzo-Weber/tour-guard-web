import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ManagerHeader from "../../../components/ManagerHeader";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Region {
  id: number;
  name: string;
  maxLoad: number;
}

interface Mine {
  id: number;
  name: string;
  // Outros campos relevantes
}

const MineDashboard: React.FC = () => {
  const [mine, setMine] = useState<Mine | null>(null);
  const [regions, setRegions] = useState<Region[]>([]);
  const [currentLoad, setCurrentLoad] = useState<number[]>([]);
  const { id } = useParams<{ id: string }>();

  // Busca informações da mina
  useEffect(() => {
    const loadMine = async () => {
      try {
        const { data } = await api.get(`/manager/mines/${id}`);
        setMine(data.mine || null);
      } catch (err) {
        console.error("Erro ao carregar mina:", err);
      }
    };

    loadMine();
  }, [id]);

  // Busca informações das regiões
  useEffect(() => {
    const loadRegions = async () => {
      try {
        const { data } = await api.get(`/manager/mines/${id}/regions`);
        const regionsData = data.regions || [];
        setRegions(regionsData);

        // Inicializa os dados de lotação
        const initialLoads = regionsData.map(({ maxLoad }: Region) =>
          Math.floor(Math.random() * (maxLoad / 2))
        );
        setCurrentLoad(initialLoads);
      } catch (err) {
        console.error("Erro ao carregar regiões:", err);
      }
    };

    loadRegions();
  }, [id]);

  // Atualiza as lotações atuais a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoad((prevLoads) =>
        prevLoads.map((load, index) => {
          const change = Math.floor(Math.random() * 7) - 3; // Incremento aleatório entre -3 e 3
          const updatedLoad = load + change;
          return Math.max(0, Math.min(updatedLoad, regions[index]?.maxLoad || 0)); // Garante que está no intervalo válido
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [regions]);

  return (
    <div>
      <ManagerHeader />
      <Container className="mt-4">
        <h2 className="text-center mb-4">{mine?.name || "Dashboard da Mina"}</h2>
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
                key={region.id}
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

export default MineDashboard;
