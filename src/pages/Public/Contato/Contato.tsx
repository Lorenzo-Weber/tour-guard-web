import React, { useState } from 'react';
import Header from '../../../components/Header';
import s from './Contato.module.css'; // Certifique-se de ter o arquivo CSS importado

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <div>
      <Header />
      <div className="d-flex flex-column min-vh-90">
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
          <div className="w-100" style={{ maxWidth: '600px' }}>
            <h2 className="mb-4 text-center">Contato</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome"
                  className="form-control input-custom"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  className="form-control input-custom"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem:</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Digite sua mensagem"
                  className="form-control input-custom"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Peça seu orçamento
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
