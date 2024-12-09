import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import { useAuth } from "../Hooks/AuthContext";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ManagerHeader = () => {
  const { signOut } = useAuth();

  return (
    <header>
      <nav className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-8">
            <Link to="/manager">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="col-6 col-md-4 text-end">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-custom-components">
                <FontAwesomeIcon icon={faUser} />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="/manager/account">Minha Conta</Dropdown.Item>
                <Dropdown.Item onClick={signOut}>Sair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ManagerHeader;
