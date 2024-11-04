import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Public/Login/Login";
import Account from "../pages/Manager/Account/Account";
import Landing from "../pages/Public/Landing/Landing"; 
import Contato from "../pages/Public/Contato/Contato"; 
import Sobre from "../pages/Public/Sobre/Sobre";

import HomeManager from "../pages/Manager/Home/Home";
import DashboardManager from "../pages/Manager/Dashboard/Dashboard";

import loginAdm from "../pages/adm/loginAdm/loginAdm";
import addManager from "../pages/adm/addManager/addManager";
import infoManager from "../pages/adm/searchManager/searchManager";
import updateInfo from "../pages/adm/updateManager/updateManager";

  const RoutesFunction = () => {
    const managerRoutes = [
      {
        path: "/manager",
        view: <HomeManager />,
      },
      {
        path: "/manager/dashboard",
        view: <DashboardManager />,
      },
      {
        path: "/manager/account",
        view: <Account />,
      },
    ];

    const admRoutes = [
      {
        path: "/adm",
        view: <loginAdm />,
      },
      {
        path: "/adm/addManager",
        view: <addManager />,
      },
      {
        path: "/adm/infoManager",
        view: <infoManager />,
      },
      {
        path: "/adm/updateInfo",
        view: <updateInfo />,
      }
    ]

    return (
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/contato" element={<Contato />} /> 
        <Route path="/sobre" element={<Sobre />} />

        {managerRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.view} />
        ))}
        {admRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.view} />
        ))}
      </Routes>
    );
  };

  export default RoutesFunction;
