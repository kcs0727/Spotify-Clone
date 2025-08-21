import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true, // if you’re using cookies for JWT
});

export default instance;


