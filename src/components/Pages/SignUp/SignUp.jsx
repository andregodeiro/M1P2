import { Button, FormSignUp, FormSignUpHeader } from "../../../styles";

export const SignUp = () => {
  return (
    <div>
      <FormSignUpHeader>
        <img src="https://i.imgur.com/pTj5VAl.png" alt="" />
        <p>
          criando sua conta no connectlab você integrará todos os seus
          dispositivos em um só ambiente!
        </p>
      </FormSignUpHeader>
      <div>
        <FormSignUp>
          <form action="" className="formSignUp">
            <div className="signUpData1">
              <label htmlFor="">Nome Completo</label>
              <input type="text" />

              <label htmlFor="">E-mail</label>
              <input type="text" />

              <label htmlFor="">Senha</label>
              <input type="password" />
            </div>
            <div className="signUpData2">
              <label htmlFor="">Foto de Perfil</label>
              <input type="text" placeholder="Insira uma URL" />

              <label htmlFor="">Telefone</label>
              <input type="number" />

              <label htmlFor="">Confirme a senha</label>
              <input type="password" />
            </div>

            <div className="signUpAdress1">
              <label htmlFor="">CEP</label>
              <input type="text" />

              <label htmlFor="">Logradouro</label>
              <input type="text" />

              <label htmlFor="">Número</label>
              <input type="number" />
            </div>
            <div className="signUpAdress2">
              <label htmlFor="">Bairro</label>
              <input type="text" />

              <label htmlFor="">Cidade</label>
              <input type="text" />

              <label htmlFor="">Estado</label>
              <input type="text" />

              <label htmlFor="">Complemento</label>
              <input type="text" />
            </div>
          </form>
          <div className="sendButton">
            <Button>Cadastrar</Button>
          </div>
        </FormSignUp>
      </div>
    </div>
  );
};

export default SignUp;
