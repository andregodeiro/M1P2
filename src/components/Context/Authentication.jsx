import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); //controlar o loading das informações da aplicação

  //useEffect para rodar todas as vezes que a aplicação iniciar
  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = (email, password) => {
    console.log("login autenthicated", { email, password });

    //API criar uma session e retornar user

    const loggedUser = {
      id: "123",
      email,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "secret") {
      setUser(loggedUser);
      navigate("/home");
    }
  };

  // user == null
  // authenticated = false

  const logout = () => {
    console.log("logout");
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
