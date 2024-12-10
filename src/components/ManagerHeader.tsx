import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ManagerHeader = () => {
  const { signOut } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/manager">
          <img src={logo} alt="" style={{ maxWidth: "150px" }} />
        </Link>
        <ul>
          <Link to="/manager/mines">
            <li>Minas</li>
          </Link>
          <Link to="/manager/account">
            <li>Minha conta</li>
          </Link>
          <Link to="" onClick={signOut}>
            <li>Sair</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default ManagerHeader;
