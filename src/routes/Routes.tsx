import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Public/Login/Login";
import Account from "../pages/Manager/Account/Account";
import Landing from "../pages/Public/Landing/Landing"; 
import Contato from "../pages/Public/Contato/Contato"; 
import Sobre from "../pages/Public/Sobre/Sobre";

import HomeManager from "../pages/Manager/Home/Home";
import DashboardManager from "../pages/Manager/Dashboard/Dashboard";
import InfoManager from "../pages/adm/infoManager/infoManager";
import AddManager from "../pages/adm/AddManager/AddManager";
import UpdateMine from "../pages/adm/UpdateMine/UpdateMine";
import PrivateRoute from "./privateRoute";
import { useAuth } from "../Hooks/AuthContext";
import { ROLE } from "./roles";
import AddMineForm from "../pages/adm/AddMineForm/AddMineForm";

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
        path: "/admin",
        view: <InfoManager />,
      },
      {
        path: "/admin/addManager",
        view: <AddManager />
      },
      {
        path: "/admin/updateMine",
        view: <UpdateMine />
      },
      {
        path: "/admin/addMine",
        view: <AddMineForm />
      }
    ]

    return (
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/login" element={
          <RedirectLogin>
            <Login />
          </RedirectLogin>
          } />
        <Route path="/landing" element={<Landing />} />
        <Route path="/contato" element={<Contato />} /> 
        <Route path="/sobre" element={<Sobre />} />

        {managerRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={
            <PrivateRoute roles={"manager"}>
              {route.view}
            </PrivateRoute>
          } />
        ))}
        {admRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={
            <PrivateRoute roles={"admin"}>
              {route.view}
            </PrivateRoute>
          } />
        ))}
      </Routes>
    );
  };

  const RedirectLogin: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { authData } = useAuth()
    let location = useLocation()
    if (!!authData?.token && !!authData?.role && location.pathname === '/login') {
      return <Navigate to={ROLE[authData.role]} replace />
    } else {
      return children
    }
  }

  export default RoutesFunction;
