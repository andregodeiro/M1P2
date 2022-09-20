import { Button, FormSignUp, FormSignUpHeader } from "../../../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const SignUp = () => {
  //Validação YUP
  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    avatar: yup.string().url(),
    password: yup.string().min(8, "mínimo 8 caracteres").required(),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser idênticas!"),
    telephone: yup.number(),
    cep: yup.string().min(8, "Insira um CEP válido").required(),
    adress: yup.string().required(),
    adressNumber: yup.number().required(),
    district: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    comp: yup.string(),
  });

  const { register, handleSubmit, setValue, setFocus, errors } = useForm({
    resolver: yupResolver(schema),
  });

  //user = e (parâmetro)
  const newUser = (user) => {
    console.log(user);
  };

  const catchCep = (user) => {
    const cep = user.target.value.replace(/\D/g, "");
    console.log(errors);
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
      res.json().then((data) => {
        setValue("adress", data.logradouro);
        setValue("district", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setFocus("adressNumber");
      })
    );
  };

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
          <form onSubmit={handleSubmit(newUser)} className="formSignUp">
            <div className="signUpData1">
              <label htmlFor="">Nome Completo</label>
              <input type="text" {...register("name")} />

              <label htmlFor="">E-mail</label>
              <input type="text" {...register("email")} />

              <label htmlFor="">Senha</label>
              <input type="password" {...register("password")} />
            </div>
            <div className="signUpData2">
              <label htmlFor="">Foto de Perfil</label>
              <input
                type="text"
                placeholder="Insira uma URL"
                {...register("avatar")}
              />

              <label htmlFor="">Telefone</label>
              <input type="number" {...register("telephone")} />

              <label htmlFor="">Confirme a senha</label>
              <input type="password" {...register("passwordConfirm")} />
              {/* <p> {errors.passwordConfirm?.message}</p> */}
            </div>

            <div className="signUpAdress1">
              <label htmlFor="">CEP</label>
              <input
                type="text"
                id="cep"
                {...register("cep")}
                onBlur={catchCep}
              />

              <label htmlFor="">Logradouro</label>
              <input type="text" id="logradouro" {...register("adress")} />

              <label htmlFor="">Número</label>
              <input type="number" id="numero" {...register("adressNumber")} />
            </div>
            <div className="signUpAdress2">
              <label htmlFor="">Bairro</label>
              <input type="text" id="bairro" {...register("district")} />

              <label htmlFor="">Cidade</label>
              <input type="text" id="cidade" {...register("city")} />

              <label htmlFor="">Estado</label>
              <input type="text" id="uf" {...register("state")} />

              <label htmlFor="">Complemento</label>
              <input type="text" id="complemento" {...register("comp")} />
            </div>
            <div className="sendButton">
              <Button type="submit"> cadastrar</Button>
            </div>
          </form>
        </FormSignUp>
      </div>
    </div>
  );
};

export default SignUp;
