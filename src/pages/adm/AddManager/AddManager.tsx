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
          await api.post('/admin/managers', {
            full_name: name,
            email,
            password
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
            <div className={s.body}>
                <form className={s.formContainer}>
                    <div>
                        <label htmlFor="name">Nome do Gerente:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Cadastrar Gerente</button>
                </form>
            </div>
        </div>
    );
};

export default AddManager;
