import { Button, Container, Table } from "react-bootstrap";
import AdmHeader from "../../../components/AdmHeader";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Managers = () => {
  const [managers, setManagers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getManagers() {
      try {
        const { data } = await api.get("/admin/manager");
        setManagers(data);
      } catch (err) {
        console.log(err);
      }
    }

    getManagers();
  }, []);

  const handleDeleteManager = async (id: number) => {
    try {
      await api.delete(`/admin/manager/${id}`);
      setManagers((prevManagers) =>
        prevManagers.filter((manager: any) => manager.user.id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdmHeader />
      <Container className="d-flex flex-column align-items-center">
        <h2 className="text-center mb-4 mt-4">Gerenciadores</h2>
        <Table
          responsive
          bordered
          hover
          className="shadow-sm"
          style={{ minWidth: "600px" }}
        >
          <thead className="table-dark">
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager: any) => (
              <tr key={manager.user.id}>
                <td>{manager.user.full_name}</td>
                <td>{manager.user.email}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="me-2"
                      title="Editar"
                      onClick={() =>
                        navigate(`/admin/managers/edit/${manager.user.id}`)
                      }
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button
                      variant="danger"
                      title="Excluir"
                      onClick={() => handleDeleteManager(manager.user.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Managers;
