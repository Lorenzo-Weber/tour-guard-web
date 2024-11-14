import Header from '../../../components/ManagerHeader';
import React, { useState, useEffect } from 'react';
import s from './Home.module.css';

const HomeManager: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {

    const initialNumber = Math.floor(Math.random() * 150) + 501;
    setRandomNumber(initialNumber);

    const intervalId = setInterval(async () => {
      await updateRandomNumber();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const updateRandomNumber = async () => {
    const randomChange = Math.floor(Math.random() * 7) - 3;
    setRandomNumber(prevNumber => prevNumber + randomChange);
  };

  return (
    <div>
      <Header />
      <h1>Bem vindo - usuario - </h1>
      <div className={s.container}>
        <div className={s.card}>
          <div className={s.column}>
            <h2>Maior lotação </h2>
            <p>Entrada</p>
          </div>
          <div className={s.column}>
            <h2>Quantidade</h2>
            <h2>{randomNumber}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeManager;
