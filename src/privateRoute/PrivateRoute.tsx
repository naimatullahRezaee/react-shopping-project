import React from "react";
import { useShoppingCartContext } from "../context/ShoppingCartContex";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLogin } = useShoppingCartContext();
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
