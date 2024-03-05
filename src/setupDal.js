import axios from "axios";

export const setupDAL = function () {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE;

  // interceptors should be here
};
