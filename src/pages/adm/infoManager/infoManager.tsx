import Header from "../../../components/AdmHeader";
import s from "./infoManager.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Button, Table } from "react-bootstrap";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface IMine {
  id: number;
  manager: any;
  name: string;
  location: string;
}

interface IUser {
  full_name: string;
  email: string;
}

const InfoManager = () => {
  const [mines, setMines] = useState<IMine[] | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [managers, setManagers] = useState<any[] | null>(null);
  const navigate = useNavigate();

  // Carrega dados do administrador e minas em um único useEffect
  useEffect(() => {
    async function loadData() {
      try {
        // Carregando os dados do administrador
        const { data: adminData } = await api.get("/admin/admins");
        setUser(adminData);
        
        // Carregando as minas e gerentes
        const { data: minesData } = await api.get("/admin/mines");
        setMines(minesData);
        
        const { data: managersData } = await api.get("/admin/manager");
        setManagers(managersData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    loadData();
  }, []);

  // Função para deletar uma mina
  const onDelete = async (mine: IMine) => {
    try {
      await api.delete(`admin/mines/${mine.id}`);
      setMines((prevMines) => prevMines?.filter((m) => m.id !== mine.id) || []);
    } catch (err) {
      console.error("Erro ao deletar mina:", err);
    }
  };

  return (
    <div>
      <Header />
      <h1>Bem-vindo, {user?.full_name}</h1>
      <div className={s.content}>
        <div className="table-responsive">
          <Table striped bordered hover variant="light" className="text-center">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Manager</th>
                <th>Mine</th>
                <th>Location</th>
                <th>Editar</th>
                <th>Apagar</th>
              </tr>
            </thead>
            <tbody>
              {mines?.map((mine, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{mine.manager.user.full_name}</td>
                  <td>{mine.name}</td>
                  <td>{mine.location}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="d-flex align-items-center mx-auto"
                      onClick={() => navigate(`/admin/edit-mine/${mine.id}`)}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} className="me-1" />
                      Editar
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      className="d-flex align-items-center mx-auto"
                      onClick={() => onDelete(mine)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="me-1" />
                      Apagar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default InfoManager;
