import React, { useState } from "react";
import s from './UpdateMine.module.css'; // Importando o módulo CSS
import Header from "../../../components/AdmHeader";


const UpdateMine = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [type, setType] = useState("");
  const [manager, setManager] = useState("");
  const [description, setDescription] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode fazer o que precisar com os dados, tipo mandar para a API ou salvar no banco

  };

  return (
    <div>
      <Header />
      <div className={s.body}>
        <form className={s.formContainer} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome da Mina:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Localização:</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="facebook">Facebook:</label>
            <input
              id="facebook"
              type="text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="instagram">Instagram:</label>
            <input
              id="instagram"
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="type">Tipo de Mina:</label>
            <input
              id="type"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="manager">Gerente:</label>
            <input
              id="manager"
              type="text"
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Descrição:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="qrCode">QR Code:</label>
            <input
              id="qrCode"
              type="text"
              value={qrCode}
              onChange={(e) => setQrCode(e.target.value)}
            />
          </div>
          <button type="submit">Atualizar Mina</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMine;
