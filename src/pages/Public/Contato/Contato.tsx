import React, { useState } from 'react';
import styles from './Contato.module.css'; // Importando o CSS
import Header from '../../../components/Header'; 

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
            {<Header />}

        <div className={styles.formContainer}> {/* Aplicando a classe para estilização */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        value={formData.nome} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        />
                    </div>
                    <div>
                     <label htmlFor="mensagem">Mensagem:</label>
                     <textarea 
                         id="mensagem" 
                         name="mensagem" 
                         value={formData.mensagem} 
                         onChange={handleChange} 
                         required 
                     />
                    </div>
                    <button type="submit">Peça seu orçamento</button>
                </form>
            </div>
        </div>
    );
};

export default Contato;
