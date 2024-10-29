import Header from '../../../components/ManagerHeader';
import s from './Dashboard.module.css';

const DashboardManager: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Ola User</h1>
            <div className={s.dashboard}>
                <div className={s.filters}>
                    <p id={s.today}>Hoje</p>
                    <p>Ontem</p>
                    <p>Esta semana</p>
                    <p>Este mês</p>
                </div>
                <div className={s.content}>
                    <div className={s.card}>
                        <p>Ocupado/nao ocupado 1</p>
                        <div className={s.graph}>
                            <div className={s.example}></div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <p>teste2</p>
                        <div className={s.graph}>
                            <div className={s.example}></div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <p>teste3</p>
                        <div className={s.graph}>
                            <div className={s.example}></div>
                        </div>
                    </div>  
                </div>
            </div>
            <h2>Terao x graficos dependendo do filtro selecionado, implementar display:grid para facilitar o posicionamento dos graficos</h2>
        </div>
    );
};

export default DashboardManager; 