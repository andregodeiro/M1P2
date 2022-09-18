import { Button, ContainerLogin } from "../../../styles";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <ContainerLogin>
      <div>
        <img src="https://i.imgur.com/pTj5VAl.png" alt="" />
        <form action="" className="formLoginContainer">
          <div className="labelInput">
            <label htmlFor="">e-mail</label>
            <input type="text" />
            <label htmlFor="">senha</label>
            <input type="password" />
          </div>
          <div className="buttons">
            <Button>
              <Link to="/home">acessar</Link>
            </Button>
            <Link to="/cadastro">crie uma conta no connectlab</Link>
          </div>
        </form>
      </div>
    </ContainerLogin>
  );
};

export default Login;
