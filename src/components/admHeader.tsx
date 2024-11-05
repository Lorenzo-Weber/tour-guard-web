import React from 'react';
import { Link } from 'react-router-dom';
import s from './admHeader.module.css';
import logo from "../assets/logo.png";

const admHeader = () => {
    return (
        <header>
            <nav>
                <Link to="/adm/infoManager"><img src={logo} className={s.logo} alt='' /></Link>
                <Link to="/adm" className={s.button}><p>Log out</p></Link>
            </nav>
        </header>
    );
};

export default admHeader;
