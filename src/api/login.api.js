import axios from "axios";

export const loginUser = ({ email, password }) =>
  axios
    .post("auth/login", { email, password })
    .then((response) => response.data)
    .catch((er) => {
      console.error("Login failed", er);
      return er.response.data;
    });

export const resetPassword = ({ email }) =>
  axios
    .post("auth/password-reset", { email })
    .then((response) => response.data)
    .catch((er) => {
      console.error("Sending email failed", er);
      return er.response.data;
    });

export const setPassword = ({ token, password, passwordConfirm }) =>
  axios
    .post("auth/password-set", {
      token,
      password,
      secret: import.meta.env.VITE_SECRET,
      password_confirm: passwordConfirm,
    })
    .then((response) => response.data)
    .catch((er) => {
      console.error("Setting password failed", er);
      return er.response.data;
    });
