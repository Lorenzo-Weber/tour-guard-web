import React, { useState } from "react";
import s from "./AddManager.module.css";
import Header from "../../../components/AdmHeader";
import api from "../../../services/api";

const AddManager = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await api.post("/admin/manager", {
        full_name: name,
        email,
        password,
      });
      alert("Gerente cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar gerente.");
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className={`container ${s.body}`}>
        <form className={`row g-3 ${s.formContainer}`}>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Nome do Gerente:</label>
            <input
              id="name"
              type="text"
              className={`form-control bg-white text-dark`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              id="email"
              type="email"
              className={`form-control bg-white text-dark`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Senha:</label>
            <input
              id="password"
              type="password"
              className={`form-control bg-white text-dark`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
              Cadastrar Gerente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddManager;
