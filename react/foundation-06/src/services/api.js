import axios from "axios";
import { tokenStore } from "./tokenStore.js";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-Type": "application/json",
  },
});

const bearer = api.interceptors.request.use((config) => {
  const token = tokenStore.getAccess();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    // NOTE: Axios will always send bearer token on every req but backend ignores when it comes to login, register etc..
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      alert("something went wrong");
    }
    return Promise.reject(error.message);
  },
);
