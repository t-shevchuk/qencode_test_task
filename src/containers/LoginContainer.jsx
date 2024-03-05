import logo from "../assets/logo.svg";

const LoginContainer = ({ children, title }) => (
  <div
    className="flex-column flex-centered fill-height"
    style={{
      gap: 30,
      padding: 8,
    }}
  >
    <img
      src={logo}
      alt="Qencode logo"
      style={{ height: 32, marginBottom: 60 }}
    />
    <div className="font-size-30 font-weight-700">{title}</div>
    {children}
  </div>
);

export default LoginContainer;
