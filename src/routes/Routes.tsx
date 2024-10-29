  import { Navigate, Route, Routes } from "react-router-dom";
  import Login from "../pages/Public/Login/Login";
  import HomeManager from "../pages/Manager/Home/Home";
  import DashboardManager from "../pages/Manager/Dashboard/Dashboard";
  import Account from "../pages/Manager/Account/Account";
  import Landing from "../pages/Public/Landing/Landing"; 
  import Contato from "../pages/Public/Contato/Contato"; 
  import Sobre from "../pages/Public/Sobre/Sobre";

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
      </Routes>
    );
  };

  export default RoutesFunction;
