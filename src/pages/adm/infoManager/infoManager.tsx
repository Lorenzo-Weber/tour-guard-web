import Header from '../../../components/admHeader';
import s from './infoManager.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const InfoManager = () => {
    return (
      <div>
        <Header />
        <h1>Bem vindo - usuario -</h1>
        <div className={s.content}>
          <div className={s.search}>  {/* Caso o input seja null ele exibe todos usuarios, caso tenha um input ele exibe o usuario buscado */}
            <div className={s.searchBar}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className={s.button}>Buscar</div>
          </div>
          <div className={s.table}>
            <p>For each user in users...</p>
          </div>
        </div>
      </div>
    )
};

export default InfoManager;