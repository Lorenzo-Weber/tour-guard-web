import Header from "../../../components/ManagerHeader";
import s from "./Home.module.css";
import { useMockup } from "../../../Hooks/MockupContext";
import { useUser } from "../../../Hooks/UserContext";

const HomeManager: React.FC = () => {
  const { fullest } = useMockup();
  const { user } = useUser();

  return (
    <div>
      <Header />
      <h1>Bem vindo, {user?.full_name} </h1>
      <div className={s.container}>
        <div className={s.card}>
          <div className={s.column}>
            <h3>Maior lotação </h3>
            <p>Entrada</p>
          </div>
          <div className={s.column}>
            <h2>Quantidade</h2>
            <h2>{fullest}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeManager;
