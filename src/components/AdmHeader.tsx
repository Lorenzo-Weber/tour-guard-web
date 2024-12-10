import React from 'react';
import { Link } from 'react-router-dom';
import s from './AdmHeader.module.css'; 
import logo from "../assets/logo.png";
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
            <Link to='' onClick={signOut} className={s.addMine}><li>Sair</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default AdmHeader;
