import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <nav className="w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-8">
              <Link to="/landing">
                <img src={logo} className="img-fluid" alt="Logo" style={{ maxWidth: '150px' }} />
              </Link>
            </div>
            <div className="col-6 col-md-4 text-end">
              <ul className="list-unstyled d-flex justify-content-end mb-0">
                <li className="ms-3">
                  <Link to="/login" className="text-decoration-none">Login</Link>
                </li>
                <li className="ms-3">
                  <Link to="/sobre" className="text-decoration-none">Sobre</Link>
                </li>
                <li className="ms-3">
                  <Link to="/contato" className="text-decoration-none">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
