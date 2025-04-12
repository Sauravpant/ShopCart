import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Navbar from "../components/layout/Navbar";
import { MainLayout } from "../components/layout/MainLayout";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
