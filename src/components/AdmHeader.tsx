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
            <Link to="/admin/addManager" className={s.addMine}><li>Adicionar mina</li></Link>
            <Dropdown>
                  <Dropdown.Toggle>
                    
                    <FontAwesomeIcon icon={faUser} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
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
