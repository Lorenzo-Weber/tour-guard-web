import React from 'react';
import { Link } from 'react-router-dom';
import s from './AdmHeader.module.css'; 
import logo from "../assets/logo.png";
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Hooks/AuthContext';

const AdmHeader = () => {
  const { signOut } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/admin"><img src={logo} className={s.logo} alt=''/></Link>
        <ul>
            <Link to="/admin/addMine" className={s.addMine}><li>Adicionar mina</li></Link>
            <Link to="/admin/addManager" className={s.addMine}><li>Adicionar gerenciador</li></Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-light p-0 border-0">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="/manager/account">Minha Conta</Dropdown.Item>
                <Dropdown.Item onClick={signOut}>Sair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </ul>
      </nav>
    </header>
  );
};

export default AdmHeader;
