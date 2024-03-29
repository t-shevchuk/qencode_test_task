import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmailInput from "../common/EmailInput";
import PasswordInput, { MIN_PASSWORD_LENGTH } from "../common/PasswordInput";
import GoogleLogin from "./GoogleLogin";
import GithubLogin from "./GithubLogin";

import { validateEmail } from "../../utils/validators";

import "./Login.css";
import { loginUser } from "../../api/login.api";
import { toast } from "react-toastify";
import { COMMON_ERROR } from "../../constants/common";

const Login = () => {
  const navigate = useNavigate();

  const [canShowErrors, setCanShowErrors] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = useMemo(() => validateEmail(email), [email]);
  const isValidPassword = useMemo(
    () => password?.length >= MIN_PASSWORD_LENGTH,
    [password]
  );

  useEffect(() => {
    //remove any sessions here
  }, []);

  const onLoginWithEmail = () => {
    if (isValidEmail && isValidPassword) {
      loginUser({ email, password })
        .then((res) => {
          if (!res?.error) {
            navigate("/discover");
          }

          toast.error(COMMON_ERROR);
        })
        .catch((e) => {
          toast.error(COMMON_ERROR);
          console.error(e);
        });
    } else {
      // if there is wrong data provided than just show errors
      setCanShowErrors(true);
    }
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="flex-column login-wrapper">
      <div className="flex" style={{ gap: 20 }}>
        <GoogleLogin />
        <GithubLogin />
      </div>
      <div className="divider">OR</div>
      <EmailInput
        placeholder="Work email"
        onEmailChange={setEmail}
        className="fill-width"
        showError={canShowErrors && !isValidEmail}
      />
      {isValidEmail && (
        <PasswordInput
          showForgot
          onPasswordChange={setPassword}
          className="fill-width"
          showError={canShowErrors && !isValidPassword}
        />
      )}

      <button className="primary-btn" onClick={onLoginWithEmail}>
        Log in to Qencode
      </button>
      <div className="align-text-center font-size-15">
        Is your company new to Qencode?{" "}
        <a onClick={navigateToSignUp}>Sign up</a>
      </div>
    </div>
  );
};

export default Login;
