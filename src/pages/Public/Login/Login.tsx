import React, { useState } from 'react';
import Header from '../../../components/Header';
import { useAuth } from '../../../Hooks/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="d-flex flex-column vh-90"> {/* Ajuste para garantir a altura total da tela */}
        <div className="container d-flex align-items-center justify-content-center flex-grow-1 mt-5"> {/* Margem superior para afastar do cabeçalho */}
          <div className="" style={{ maxWidth: '600px', width: '100%' }}>
            <h2 className="mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  className="form-control bg-white text-dark"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha:</label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  id="password"
                  name="password"
                  className="form-control bg-white text-dark"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn w-100" style={{background:"blueviolet", color:"aliceblue"}}>
                Fazer Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
