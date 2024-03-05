import logo from "../assets/logo.svg";

import "./LoginContainer.css";

const LoginContainer = ({ children, title }) => (
  <div className="flex-column flex-centered fill-height wrapper">
    <img src={logo} alt="Qencode logo" className="logo" />
    <div className="font-size-30 font-weight-700">{title}</div>
    <div className="content-wrapper fill-width">{children}</div>
  </div>
);

export default LoginContainer;
