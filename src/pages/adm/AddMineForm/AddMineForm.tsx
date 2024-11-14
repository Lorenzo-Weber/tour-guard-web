import React, { useState } from 'react';
import s from './AddMineForm.module.css';
import Header from '../../../components/AdmHeader';
import api from '../../../services/api';
import { useAuth } from '../../../Hooks/AuthContext';

function AddMineForm() {

  const {authData} = useAuth();
  const [form, setForm] = useState({
    admin_id: 20,
    name: '',
    type: 'carvao',
    location: '',
    description: '',
    qr_code: '',
    instagram: '',
    facebook: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Dados da mina:', form);
    console.log('Token:', authData.token);
    
    try {
      await api.post('/admin/mines', form);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <Header />
        <div className={s.center}>
            <form onSubmit={handleSubmit} className={s.formContainer}>
              <div className={s.formGroup}>
                <label className={s.label}>Nome da Mina:</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={s.inputField}
                />
              </div>
              <div className={s.formGroup}>
                <label className={s.label}>Localização:</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  className={s.inputField}
                />
              </div>
              <div className={s.formGroup}>
                <label className={s.label}>Descrição:</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  className={s.textArea}
                />
              </div>
              <div className={s.formGroup}>
                <label className={s.label}>QR Code:</label>
                <input
                  type="text"
                  name="qr_code"
                  value={form.qr_code}
                  onChange={handleChange}
                  className={s.inputField}
                />
              </div>
              <div className={s.formGroup}>
                <label className={s.label}>Instagram (URL):</label>
                <input
                  type="url"
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  className={s.inputField}
                />
              </div>
              <div className={s.formGroup}>
                <label className={s.label}>Facebook (URL):</label>
                <input
                  type="url"
                  name="facebook"
                  value={form.facebook}
                  onChange={handleChange}
                  className={s.inputField}
                />
              </div>
              <button type="submit" onClick={(e) => handleSubmit(e)} className={s.submitButton}>Adicionar Mina</button>
            </form>
        </div>
    </div>
  );
}

export default AddMineForm;