import { Button, ContainerLogin } from "../../../styles";

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
            <Button>acessar</Button>
            <a href="./">crie uma conta no connectlab</a>
          </div>
        </form>
      </div>
    </ContainerLogin>
  );
};
