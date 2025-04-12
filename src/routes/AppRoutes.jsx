import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Products from "../components/common/Products";
import { MainLayout } from "../components/layout/MainLayout";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>}></Route>
        </Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<SignUp />}></Route>
        <Route path="/404" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
