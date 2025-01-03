import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import OurMenu from "../pages/our menu/OurMenu";
import OurShop from "../pages/our shop/OurShop";
import DashBoard from "../layouts/dashboard/DashBoard";
import NotFound from "../pages/not-found/NotFound";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Secret from "../components/shared/secret/Secret";
import Cart from "../pages/dashboard/Cart";
import UserHome from "../pages/dashboard/UserHome";

const Router = () => {
  return (
    <Routes>
      {/* Public Routes with Main Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<OurMenu />} />
        {/* Shop Routes */}
        <Route path="shop">
          <Route index element={<OurShop />} />
          <Route path=":category" element={<OurShop />} />
        </Route>
      </Route>
      {/* user dashboard layout */}
      <Route path="dashboard" element={<DashBoard />}>
        <Route index  element={<UserHome/>} />
        <Route path="cart" element={<Cart />} />
      </Route>
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
      {/* auth */}
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Route>
      {/* secret */}
      <Route
        path="secret"
        element={
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default Router;
