import { Button, ContainerLogin } from "../../../styles";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Login = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const LoginFunc = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <ContainerLogin>
      <div>
        <img src="https://i.imgur.com/pTj5VAl.png" alt="" />
        <form className="formLoginContainer">
          <div className="labelInput">
            <label htmlFor="email" name="email" id="email">
              e-mail
            </label>
            <input type="text" />
            <label htmlFor="password">senha</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="buttons">
            <Button>
              <Link to="/home">
                <input type="submit" value="acessar" />
              </Link>
            </Button>
            <Link to="/cadastro">crie uma conta no connectlab</Link>
          </div>
        </form>
      </div>
    </ContainerLogin>
  );
};

export default Login;
