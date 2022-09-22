import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { api, createSession } from "../../services/api";

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

  const login = async (email, password) => {
    const response = await createSession(email, password);

    console.log("login autenthicated", response.data);

    //API criar uma session e retornar user

    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/home");
    console.log(token);
  };

  // user == null
  // authenticated = false

  const logout = () => {
    console.log("logout");
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
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
