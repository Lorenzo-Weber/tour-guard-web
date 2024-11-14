import Header from '../../../components/AdmHeader';
import s from './infoManager.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Form } from 'react-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface IMine {
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

  useEffect(() => {
    async function loadData() {
      try {
        const {data} = await api.get('/admin/admins')
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    } 
    loadData();
  }, []);

  useEffect(() => {
    async function loadManagers() {
      try {
        const { data } = await api.get('/admin/managers')
        setManagers(data)
      } catch (error) {
        console.error(error)
      }
    }
    loadManagers();
  }, [])

  useEffect(() => {
    async function loadMines() {
      try {
        const {data} = await api.get('/admin/mines')
        setMines(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    } 

    loadMines();
  }, []);
  

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica pra busca
  };

  return (
    <div>
      <Header />
      <h1>Bem vindo, {user?.full_name}</h1>
      <div className={s.content}>
        <form className={s.search} onSubmit={handleSearch}>
          <label htmlFor="searchBar" className={s.searchBar}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Form.Select>
              <option>Selecione um gerente</option>
              {managers?.map((manager, index) => (
                <option key={index}>{manager.user.full_name}</option>
              ))}
            </Form.Select>
          </label>
          <button type="submit" className={s.button}>Buscar</button>
        </form>
        <Table striped bordered hover>
          <thead>
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
                <td>{index}</td>
                <td>{mine.manager.user.full_name}</td>
                <td>{mine.name}</td>
                <td>{mine.location}</td>
                <td> <FontAwesomeIcon icon={ faPenToSquare } /> </td>
                <td> <FontAwesomeIcon icon={faTrash} /> </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default InfoManager;