import { useState } from 'react';
import Header from '../../../components/ManagerHeader';

const Account = () => {
    const [managerData, setManagerData] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setManagerData({
            ...managerData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Dados atualizados:', managerData);
    };

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <h2>Atualizar Dados do Manager</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Nome:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={managerData.name}
                                    onChange={handleInputChange}
                                    className="form-control bg-white text-dark"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={managerData.email}
                                    onChange={handleInputChange}
                                    className="form-control bg-white text-dark"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn mt-3" style={{background:"blueviolet", color:"aliceblue"}}>Atualizar</button>
                </form>
            </div>
        </div>
    );
};

export default Account;
