import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Public/Login/Login";
import HomeManager from "../pages/Manager/Home/Home";

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

      {managerRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.view} />
      ))}
    </Routes>
  );
};

export default RoutesFunction;
