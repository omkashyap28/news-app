import axios from "axios";

const api = axios.create({
  baseURL: String(import.meta.env.VITE_API_BASE_URL),
  timeout: 5000,
});

export { api };
