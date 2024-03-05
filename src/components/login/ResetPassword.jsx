import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PasswordInput, { MIN_PASSWORD_LENGTH } from "../common/PasswordInput";

import { setPassword as updatePassword } from "../../api/login.api";

import "./Login.css";
import { toast } from "react-toastify";
import { COMMON_ERROR } from "../../constants/common";

const ResetPassword = () => {
  const { token } = useParams();

  const navigate = useNavigate();

  // don't show any error until user try to submit
  const [canShowErrors, setCanShowErrors] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    // remove any sessions here
    // check if provided token is correct
    // otherwise navigate to login
  }, []);

  const isValidPassword = useMemo(
    () => password?.length >= MIN_PASSWORD_LENGTH,
    [password]
  );
  const isValidConfirmedPassword = useMemo(
    () => passwordConfirm?.length >= MIN_PASSWORD_LENGTH,
    [passwordConfirm]
  );
  const arePasswordsDifferent = useMemo(
    () =>
      isValidConfirmedPassword &&
      isValidPassword &&
      password !== passwordConfirm,
    [passwordConfirm, isValidConfirmedPassword, isValidPassword, password]
  );

  const onReset = () => {
    setCanShowErrors(true);

    if (
      isValidPassword &&
      isValidConfirmedPassword &&
      password === passwordConfirm
    ) {
      updatePassword({ token, password, passwordConfirm })
        .then((res) => {
          if (!res.error) {
            toast.success("Password updated");
            setTimeout(() => {
              navigate("/login");
            }, 500);
          }

          toast.error(COMMON_ERROR);
        })
        .catch((e) => console.error(e));
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
          onPasswordChange={setPasswordConfirm}
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
