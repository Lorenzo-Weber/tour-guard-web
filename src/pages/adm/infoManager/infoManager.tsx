import Header from "../../../components/AdmHeader";
import s from "./infoManager.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Button, Table } from "react-bootstrap";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get("/admin/admins");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadManagers() {
      try {
        const { data } = await api.get("/admin/manager");
        setManagers(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadManagers();
  }, []);

  useEffect(() => {
    async function loadMines() {
      try {
        const { data } = await api.get("/admin/mines");
        setMines(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadMines();
  }, []);

  const onDelete = async (mine: any) => {
    try {
      await api.delete(`admin/mines/${mine.id}`);

      setMines((prevMines) => prevMines!.filter((m) => m.id !== mine.id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <h1>Bem vindo, {user?.full_name}</h1>
      <div className={s.content}>
        {/* <form className={s.search} onSubmit={handleSearch}>
          <label htmlFor="searchBar" className={s.searchBar}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Form.Select>
              <option>Selecione um gerente</option>
              {managers?.map((manager, index) => (
                <option key={index}>{manager.user.full_name}</option>
              ))}
            </Form.Select>
          </label>
          <button type="submit" className={s.button}>
            Buscar
          </button>
        </form> */}
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
