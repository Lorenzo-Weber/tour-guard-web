import axios from "axios";

const isProd = process.env.NODE_ENV === "production";

const apiUrl = isProd
  ? "https://tour-guard-b28d110234e5.herokuapp.com"
  : "http://localhost:3333";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      let is_token_valid = localStorage.getItem("@tourguard:is_token_valid");
      if (is_token_valid && is_token_valid === "true") {
        localStorage.setItem("@tourguard:is_token_valid", "false");
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
