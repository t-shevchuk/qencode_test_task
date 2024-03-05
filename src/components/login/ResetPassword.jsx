import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import PasswordInput, { MIN_PASSWORD_LENGTH } from "../common/PasswordInput";

import "./Login.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  // don't show any error until user try to submit
  const [canShowErrors, setCanShowErrors] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const isValidPassword = useMemo(
    () => password?.length >= MIN_PASSWORD_LENGTH,
    [password]
  );
  const isValidConfirmedPassword = useMemo(
    () => confirmedPassword?.length >= MIN_PASSWORD_LENGTH,
    [confirmedPassword]
  );
  const arePasswordsDifferent = useMemo(
    () =>
      isValidConfirmedPassword &&
      isValidPassword &&
      password !== confirmedPassword,
    [confirmedPassword, isValidConfirmedPassword, isValidPassword, password]
  );

  const onReset = () => {
    setCanShowErrors(true);

    if (
      isValidPassword &&
      isValidConfirmedPassword &&
      password === confirmedPassword
    ) {
      // here should be api call to update password
      setTimeout(() => {
        navigate("/login");
      }, 500);
    }
  };

  return (
    <div className="flex-column fill-width login-wrapper">
      <div className="flex-column">
        <div className="font-size-15 font-weight-500 m-b-05x">Password</div>
        <PasswordInput
          onPasswordChange={setPassword}
          className="fill-width"
          showError={canShowErrors && !isValidPassword}
        />
      </div>
      <div className="flex-column">
        <div className="font-size-15 font-weight-500 m-b-05x">
          Confirm Password
        </div>
        <PasswordInput
          onPasswordChange={setConfirmedPassword}
          className="fill-width"
          showError={canShowErrors && !isValidConfirmedPassword}
        />
        {arePasswordsDifferent && (
          <div className="error-text">Passwords are different</div>
        )}
      </div>

      <button className="primary-btn" onClick={onReset}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
