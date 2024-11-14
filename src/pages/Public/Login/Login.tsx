import React, { useState } from 'react';
import Header from '../../../components/Header';

import styles from './Login.module.css';
import { useAuth } from '../../../Hooks/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <div className={styles.body}>
        <div className={styles.formContainer}> {/* Aplicando a classe para estilização */}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder='Digite seu email'
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                placeholder='Digite seu senha'
                id="password"
                className={styles.input}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Fazer Login</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;
