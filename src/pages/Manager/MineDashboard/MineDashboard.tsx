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
  currentLoad: number;
  description: string;
}

interface Mine {
  id: number;
  name: string;
  // Outros campos relevantes
}

const MineDashboard: React.FC = () => {
  const [mine, setMine] = useState<Mine | null>(null);
  const [regions, setRegions] = useState<Region[]>([]);
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
        let regionsData = data.regions || [];

        regionsData = regionsData.map((region: Region, index: number) => {
          const maxLoad = Math.floor(Math.random() * 100) + 500; // Lotação máxima aleatória
          return {
            ...region,
            maxLoad: maxLoad,
            currentLoad: Math.floor(Math.random() * maxLoad), // Lotação atual aleatória,
          };
        });

        setRegions(regionsData);
      } catch (err) {
        console.error("Erro ao carregar regiões:", err);
      }
    };

    loadRegions();
  }, [id]);

  // A cada 5 segundos, atualiza a lotação atual das regiões, em um range de 15% para mais ou para menos
  // verificando se a lotação atual não ultrapassa o intervalo de 0 até a lotação máxima
  useEffect(() => {
    const interval = setInterval(() => {
      setRegions((prevRegions) => {
        return prevRegions.map((region) => {
          const loadVariation = Math.floor(Math.random() * 30) - 15;
          const newLoad = region.currentLoad + loadVariation;

          return {
            ...region,
            currentLoad: Math.max(0, Math.min(region.maxLoad, newLoad)),
          };
        });
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [regions]);

  return (
    <div>
      <ManagerHeader />
      <Container className="mt-4">
        <h2 className="text-center mb-4">
          {mine?.name || "Dashboard da Mina"}
        </h2>
        <Row>
          {regions.map((region, index) => {
            const data = {
              labels: ["Ocupado", "Disponível"],
              datasets: [
                {
                  data: [
                    region.currentLoad,
                    region.maxLoad - region.currentLoad,
                  ],
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
                    <Card.Title className="text-center">
                      Região {index + 1}
                    </Card.Title>
                    <Card.Text className="text-center">
                      {region.description}
                    </Card.Text>

                    <div className="text-center">
                      <strong>Lotação atual:</strong> {region.currentLoad} /{" "}
                      {region.maxLoad}
                    </div>
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
