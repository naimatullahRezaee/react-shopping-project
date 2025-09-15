import React from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContex";

const Login = () => {
  const { handleLogin } = useShoppingCartContext();
  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded">
          Username:
          <input type="text" placeholder="username" />
          Passwrod
          <input type="password" placeholder="password" />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
