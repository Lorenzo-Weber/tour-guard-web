import React from 'react';
import Header from '../../../components/Header';
import landing from "../../../assets/landing.png";
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <Header />
            <div className="container-fluid vh-100 d-flex align-items-center">
                <div className="row w-100">
                    {/* Coluna do texto */}
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-5">
                        <h1 className="mb-4">
                            <span className="border-bottom border-primary">
                                Bem-vindo à Tour Guard
                            </span> – tecnologia avançada em monitoramento de minas históricas, garantindo uma experiência turística segura, informativa e inesquecível.
                        </h1>
                        <div>
                            <Link to="/contato" className="btn me-2" style={{backgroundColor:"blueviolet", color:"aliceblue"}}>
                                Peça Orçamento
                            </Link>
                            <Link to="/sobre" className="btn" style={{background:"darkviolet", color:"aliceblue"}}>
                                Saiba mais
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={landing} alt="Landing" className="img-fluid" style={{ maxHeight: '60vh', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
