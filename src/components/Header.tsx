import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/landing"><img src={logo} className={styles.logo} alt=''/></Link>
        <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/sobre"><li>Sobre</li></Link>
            <Link to="/contato"><li>Contato</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
