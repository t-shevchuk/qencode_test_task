import { useState } from "react";
import { useNavigate } from "react-router-dom";

import eyeIcon from "../../assets/eye.svg";
import closedEyeIcon from "../../assets/closed-eye.svg";

import "./PasswordInput.css";

export const MIN_PASSWORD_LENGTH = 8;

const TYPE_PASSWORD = "password";
const TYPE_TEXT = "text";

const PasswordInput = ({
  placeholder = "Password",
  onPasswordChange = () => {},
  className = "",
  showError = false,
  showForgot = false,
}) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState(TYPE_PASSWORD);

  const handleChange = (e) => {
    const { value } = e.target;

    setPassword(value);
    onPasswordChange(value);
  };

  const handleTypeChange = () => {
    setInputType(inputType === TYPE_PASSWORD ? TYPE_TEXT : TYPE_PASSWORD);
  };

  const onForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className={`flex-column ${className}`} style={{ gap: 12 }}>
      <div className={`flex-column ${className}`}>
        <div className="password-wrapper flex flex-1">
          <input
            className="fill-width"
            type={inputType}
            placeholder={placeholder}
            onChange={handleChange}
            value={password}
            minLength={MIN_PASSWORD_LENGTH}
          />
          <span className="password-icon" onClick={handleTypeChange}>
            {inputType === TYPE_PASSWORD ? (
              <img src={eyeIcon} alt="Show password" />
            ) : (
              <img
                src={closedEyeIcon}
                alt="Hide password"
                height={20}
                width={20}
              />
            )}
          </span>
        </div>
        {showError && (
          <div className="error-text">Please enter valid password</div>
        )}
      </div>
      {showForgot && (
        <a onClick={onForgotPassword} style={{ textAlign: "end" }}>
          Forgot your password?
        </a>
      )}
    </div>
  );
};

export default PasswordInput;
