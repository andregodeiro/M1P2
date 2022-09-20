import { Button, ContainerLogin } from "../../../styles";
import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(8).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const userLogin = (user) => {
    console.log(user);
  };

  return (
    <ContainerLogin>
      <div>
        <img src="https://i.imgur.com/pTj5VAl.png" alt="" />
        <form onSubmit={handleSubmit(userLogin)} className="formLoginContainer">
          <div className="labelInput">
            <label htmlFor="email" name="email" id="email">
              e-mail
            </label>
            <input type="text" {...register("email")} />
            <label htmlFor="password">senha</label>
            <input type="password" {...register("password")} />
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
