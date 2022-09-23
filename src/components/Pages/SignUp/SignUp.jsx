import { Button, FormSignUp, FormSignUpHeader } from "../../../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../../services/api";

export const SignUp = () => {
  //Validação YUP
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .min(15, "Campo obrigatório! Mínimo 15 caracteres!")
      .required(),
    email: yup.string().email().required("Campo obrigatório!"),
    photoUrl: yup.string().url(),
    password: yup
      .string()
      .min(8, "Mínimo 8 caracteres")
      .required("Campo obrigatório!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "A senha precisa ter no mínimo 8 caracteres, " +
          "uma letra maiúscula, uma letra minúscula, " +
          "um número e um caracter especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser idênticas!"),
    phone: yup.number(),
    zipCode: yup
      .string()
      .min(8, "Insira um CEP válido")
      .required("Campo obrigatório!"),
    street: yup.string().required(),
    number: yup.number().required("Campo obrigatório!"),
    neighborhood: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  //user = e (parâmetro)
  // const newUser = (user) => {
  //   console.log(user);
  // };

  const catchCep = (user) => {
    const cep = user.target.value.replace(/\D/g, "");
    console.log(errors);
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
      res.json().then((data) => {
        setValue("street", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setFocus("number");
      })
    );
  };

  const createUser = (value) => {
    const {
      email,
      password,
      fullName,
      photoUrl,
      phone,
      zipCode,
      street,
      number,
      neighborhood,
      city,
      state,
      complement,
    } = value;

    api
      .post("/auth/register", {
        email,
        password,
        fullName,
        photoUrl,
        phone,
        userAddress: {
          zipCode,
          street,
          number,
          neighborhood,
          city,
          state,
          complement,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log("Erro", +response);
      });
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
          <form onSubmit={handleSubmit(createUser)} className="formSignUp">
            <div className="signUpData1">
              <label htmlFor="">Nome Completo</label>
              <input type="text" {...register("fullName")} />
              <small>{errors.fullName?.message}</small>

              <label htmlFor="">E-mail</label>
              <input type="text" {...register("email")} />
              <small>{errors.email?.message}</small>

              <label htmlFor="">Senha</label>
              <input type="password" {...register("password")} />
              <p>{errors.password?.message}</p>
            </div>
            <div className="signUpData2">
              <label htmlFor="">Foto de Perfil</label>
              <input
                type="text"
                placeholder="Insira uma URL"
                {...register("photoUrl")}
              />

              <label htmlFor="">Telefone</label>
              <input type="number" {...register("phone")} />

              <label htmlFor="">Confirme a senha</label>
              <input type="password" {...register("passwordConfirm")} />
              <small>{errors.passwordConfirm?.message}</small>
            </div>

            <div className="signUpAdress1">
              <label htmlFor="">CEP</label>
              <input
                type="text"
                id="cep"
                {...register("zipCode")}
                onBlur={catchCep}
              />
              <small>{errors.zipCode?.message}</small>

              <label htmlFor="">Logradouro</label>
              <input type="text" id="logradouro" {...register("street")} />

              <label htmlFor="">Número</label>
              <input type="number" id="numero" {...register("number")} />
            </div>
            <div className="signUpAdress2">
              <label htmlFor="">Bairro</label>
              <input type="text" id="bairro" {...register("neighborhood")} />

              <label htmlFor="">Cidade</label>
              <input type="text" id="cidade" {...register("city")} />

              <label htmlFor="">Estado</label>
              <input type="text" id="uf" {...register("state")} />

              <label htmlFor="">Complemento</label>
              <input type="text" id="complemento" {...register("complement")} />
            </div>
            <div className="sendButton">
              <Button type="submit">cadastrar</Button>
            </div>
          </form>
        </FormSignUp>
      </div>
    </div>
  );
};

export default SignUp;
