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
                <div className={s.panel}>
                    <div className={s.column}>
                        <h1>
                            <span className={s.title_style}>Bem-vindo à Tour Guard</span>  – tecnologia avançada em monitoramento de minas históricas, garantindo uma experiência turística segura, informativa e inesquecível. Com a Tour Guard, cada visita se torna uma jornada tranquila, aliando segurança e inovação para que todos possam explorar esse patrimônio com confiança.
                        </h1>
                        <div>
                            <Link to="/contato" className={s.button}>Peça Orçamento</Link>
                            <Link to="/sobre" className={s.button}>Saiba mais</Link>
                        </div>
                    </div>
                </div>
                <div className={s.panel}><img src={landing} alt="" /></div>
            </div>
        </div>
    );
};

export default Landing;
