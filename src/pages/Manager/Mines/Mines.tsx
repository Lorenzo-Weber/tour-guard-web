import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import api from "../../../services/api";
import { Container, Row } from "react-bootstrap";

const Mines: React.FC = () => {
  const [mines, setMines] = useState<any>();

  useEffect(() => {
    async function loadMines() {
      try {
        const { data } = await api.get("/manager/mines");
        console.log(data);

        setMines(data.mines);
      } catch (err) {
        console.error(err);
      }
    }

    loadMines();
  }, []);

  return (
    <div>
      <Header />

      {/* container com listagem das minas em cards */}
      <Container>
        <Row>
          {mines?.map((mine: any) => (
            <div key={mine.id}>
              <h1>{mine.name}</h1>
              <p>{mine.description}</p>
              <p>{mine.location}</p>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Mines;
