import React from 'react';
import Header from '../../../components/Header';
import { Link } from 'react-router-dom';
import s from './Sobre.module.css';

const Sobre = () => {
    return (
        <body>
            <Header />
            <div className={s.infos} id="sobre">
                <div className={s.title}>
                    <i className='fa-regular fa-adress-card' />
                    <h1>Sobre a Tour Guard</h1>
                </div>
                <p>
                    A Tour Guard nasceu durante o desenvolvimento de um projeto acadêmico na disciplina de Projeto de Software II, e desde então, nossa missão tem sido clara: garantir a segurança dos seus turistas de forma inovadora e eficiente. Combinamos tecnologia de ponta e soluções inteligentes para proporcionar uma experiência segura e confiável para visitantes em diversos pontos turísticos.
                    Nosso sistema foi pensado para atender as necessidades tanto de turistas quanto de administradores de atrações, oferecendo monitoramento em tempo real, controle de fluxo de visitantes e recursos de segurança que fazem da Tour Guard uma escolha ideal para quem busca uma experiência tranquila e segura.
                </p>
            </div>

            <div className={s.infos}>
                <div className={s.title}>

                    <h1>Nosso Serviço</h1>
                </div>
                <p>
                    Na Tour Guard, utilizamos tecnologia avançada para garantir que a gestão de visitantes seja precisa e segura. Através de sensores estrategicamente posicionados em pontos turísticos, captamos em tempo real o fluxo de visitantes, proporcionando dados valiosos para otimizar a experiência de todos.
                    Esses dados são integrados em um dashboard intuitivo e interativo, acessível por administradores das atrações turísticas, que oferece uma visão detalhada do número de visitantes, horários de maior fluxo e alertas de segurança. Isso permite um controle eficiente da capacidade, evitando superlotação e garantindo o bem-estar de cada turista.
                    Com a Tour Guard, você tem todas as informações necessárias para gerenciar seu espaço com confiança, assegurando uma experiência tranquila para seus visitantes e a segurança que eles merecem.
                </p>
            </div>

            <div className={s.infos}>
                <div className={s.title}>

                    <Link to="/contato"><h1>Junte-se a nos</h1></Link>
                </div>
                <p>
                    Na Tour Guard, estamos prontos para levar a segurança e a gestão dos seus turistas a um novo patamar. Se você administra um ponto turístico ou uma atração que recebe visitantes, nossa solução é ideal para garantir a segurança e a satisfação de todos.
                    Com nossa tecnologia de sensores e nosso dashboard inteligente, você terá o controle total do fluxo de visitantes, otimizará a experiência deles e manterá a tranquilidade em cada visita.
                    Contrate a Tour Guard e conte com uma solução inovadora que une eficiência e proteção. Junte-se a nós e faça da segurança uma prioridade para seus turistas!
                </p>
            </div>
        </body>
    );
};

export default Sobre;