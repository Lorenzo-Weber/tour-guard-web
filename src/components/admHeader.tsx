import React from 'react';
import { Link } from 'react-router-dom';
import s from './admHeader.module.css'; 
import logo from "../assets/logo.png";

const admHeader = () => {
  return (
    <header>
      <nav>
        <Link to="/adm/infoManager"><img src={logo} className={s.logo} alt=''/></Link>
        <ul>
            <Link to="/adm/addManager" className={s.addMine}><li>Adicionar mina</li></Link>
            <Link to="/adm"><li>Logout</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default admHeader;
