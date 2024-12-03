import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ManagerHeader.module.css";
import logo from "../assets/logo.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import { useAuth } from "../Hooks/AuthContext";

const ManagerHeader = () => {
  const { signOut } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/landing">
          <img src={logo} className={styles.logo} alt="" />
        </Link>
        <ul>
          <Dropdown>
            <Dropdown.Toggle>
              <FontAwesomeIcon icon={faUser} />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ position: "relative" }}>
              <Dropdown.Item href="/manager/account">Minha Conta</Dropdown.Item>
              <Dropdown.Item onClick={signOut}>Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </nav>
    </header>
  );
};

export default ManagerHeader;
