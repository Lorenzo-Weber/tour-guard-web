import React from 'react';
import Header from '../../../components/Header'; 
import s from './Landing.module.css';

const Landing = () => {
    return (
        <div>
            {<Header />}
            <div className={s.body}>
                <h3 className={s.panel}>
                    "Bem-vindo à Tour Guard – Tecnologia avançada 
                    para monitoramento de minas, garantindo uma 
                    experiência turística segura e inesquecível."
                </h3>
                <div className={s.panel}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, aperiam.</div>
            </div>
        </div>
    );
  };
  
  export default Landing;
  