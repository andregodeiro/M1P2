import axios from "axios";

export const api = axios.create({
  baseURL: "https://connectlab.onrender.com/",
});

export const createSession = async (email, password) => {
  return api.post("/auth/login", { email, password });
};

export const getUser = async () => {
  const recoveredUser = localStorage.getItem("user");
  const recoveredId = JSON.parse(recoveredUser);
  const id = recoveredId._id;
  const recoveredToken = localStorage.getItem("token");

  api.defaults.headers.Authorization = `Bearer ${recoveredToken}`;

  console.log(recoveredToken);
  console.log(id);

  return api.get(`/users/${id}`);
};

export const getDevice = async () => {
  const recoveredToken = localStorage.getItem("token");

  api.defaults.headers.Authorization = `Bearer ${recoveredToken}`;

  return api.get("/devices");
};
