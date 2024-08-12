import axios from "axios";
import { WebRoute } from "../common";

const AxiosUtils = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
};

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers!["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.history.pushState(null, "", WebRoute.auth.login);
    }

    return Promise.reject(error);
  }
);

export default AxiosUtils;
