import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import styles from './ManagerHeader.module.css';
import logo from "../assets/logo.png";
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ManagerHeader = () => {
    return (
        <header>
          <nav>
            <Link to="/landing"><img src={logo} className={styles.logo} alt=''/></Link>
            <ul>
                <Link to="/Manager/Account"> <li> <FontAwesomeIcon icon={faUser} />  </li></Link>  
            </ul>
          </nav>
        </header>
      );
}

export default ManagerHeader;
