import React, { useEffect, useState } from "react";
import s from "./UpdateMine.module.css"; // Importando o módulo CSS
import Header from "../../../components/AdmHeader";
import api from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMine = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [type, setType] = useState("");
  const [manager, setManager] = useState<any>();
  const [description, setDescription] = useState("");
  const [qrCode, setQrCode] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get(`admin/mines/${id}`);
        setName(data.name);
        setLocation(data.location);
        setFacebook(data.facebook);
        setInstagram(data.instagram);
        setDescription(data.description);
        setType(data.type);

        const response = await api.get(`/admin/manager/${data.admin_id}`);

        setManager(response.data.user);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
  }, [id]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const model = {
      name,
      location,
      facebook,
      instagram,
      description,
      type,
      // admin_id: 1,
    };

    try {
      api.put(`/admin/mines/${id}`, model);

      navigate("/admin");
    } catch (err) {
      console.error(err);
    }
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
          {/* <div>
            <label htmlFor="manager">Gerente:</label>
            <input
              id="manager"
              type="text"
              value={manager?.full_name}
              onChange={(e) => setManager(e.target.value)}
              required
            />
          </div> */}
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
