import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Public/Login/Login";
import HomeManager from "../pages/Manager/Home/Home";
import Landing from "../pages/Public/Landing/Landing"; 
import Contato from "../pages/Public/Contato/Contato"; // Importando o componente de Contato

const RoutesFunction = () => {
  const managerRoutes = [
    {
      path: "/manager",
      view: <HomeManager />,
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/contato" element={<Contato />} /> {/* Nova rota de Contato */}

      {managerRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.view} />
      ))}
    </Routes>
  );
};

export default RoutesFunction;
