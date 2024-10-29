import React from 'react';
import Header from '../../../components/Header';
import s from './Landing.module.css';
import landing from "../../../assets/landing.png"
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            {<Header />}
            <div className={s.body}>
                <h1 className={s.panel}>
                    <span className={s.title_style}>Bem-vindo à Tour Guard</span> – Tecnologia avançada
                    para monitoramento de minas, garantindo uma
                    experiência turística segura e inesquecível.
                </h1>
                <div className={s.panel}><img src={landing} alt="" /></div>
            </div>
        </div>
    );
};

export default Landing;
