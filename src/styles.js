import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* border: solid; */
  justify-content: space-between;

  img {
    width: 350px;
    margin-top: 150px;
  }

  label {
    /* border: solid; */
    text-align: left;
  }

  .labelInput {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* border: solid red; */
  }

  .labelInput input {
    outline: none;
    border: solid #000;
    border-width: 0 0 1px 0;
    width: 250px;
  }

  .formLoginContainer {
    display: flex;
    flex-direction: column;
    /* border: solid blue; */
    align-items: center;
    gap: 10px;
    margin-top: 100px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #0494dc;
  color: white;
  padding: 10px;
  width: 100px;
  font-size: 20px;
  border-radius: 10px;
`;

export const FormSignUpHeader = styled.div`
  text-align: center;

  img {
    width: 350px;
    margin-top: 50px;
  }
`;

export const FormSignUp = styled.div`
  .formSignUp {
    display: grid;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* border: solid blue; */
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 10px;
    margin-top: 100px;
    width: 2vr;
  }

  .signUpData1 {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    align-items: start;
    /* border: solid blue; */
  }

  .signUpData2 {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-direction: column;
    /* border: solid blue; */
  }

  .signUpAdress1 {
    grid-area: 2 / 1 / 3 / 2;
    /* border: solid red; */
    display: flex;
    flex-direction: column;
  }

  .signUpAdress2 {
    grid-area: 2 / 2 / 3 / 3;
    /* border: solid red; */
    display: flex;
    flex-direction: column;
  }

  label {
    /* border: solid; */
    text-align: left;
  }

  .formSignUp input {
    outline: none;
    border: solid #000;
    border-width: 0 0 1px 0;
    width: 550px;
  }

  .sendButton {
    text-align: center;
    display: flex;
    justify-content: center;
    /* border: solid grey; */
    margin-top: 30px;
  }
`;

export const NavbarComponent = styled.div`
  background-color: #505151;
  padding: 10px;

  img {
    width: 300px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
  }

  .linksNavbar {
    display: flex;
    gap: 30px;
  }

  .linksNavbar a {
    background-color: #0098da;
    text-decoration: none;
    color: white;
    padding: 10px;
    border-radius: 10px;
  }
`;
