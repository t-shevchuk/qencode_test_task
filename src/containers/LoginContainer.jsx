import logo from "../assets/logo.svg";

const LoginContainer = ({ children }) => (
  <div
    className="flex-column"
    style={{
      gap: 80,
    }}
  >
    <img src={logo} alt="Qencode logo" style={{ height: 32 }} />
    {children}
  </div>
);

export default LoginContainer;
