import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import { MainLayout } from "../components/layout/MainLayout";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
