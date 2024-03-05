import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import EmailInput from "../common/EmailInput";

import { validateEmail } from "../../utils/validators";
import { resetPassword } from "../../api/login.api";

import "./Login.css";
import { COMMON_ERROR } from "../../constants/common";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [canShowErrors, setCanShowErrors] = useState(false);
  const [email, setEmail] = useState("");

  const isValidEmail = useMemo(() => validateEmail(email), [email]);

  useEffect(() => {
    if (canShowErrors && isValidEmail) {
      setCanShowErrors(false);
    }
  }, [canShowErrors, isValidEmail]);

  const onEmailChange = (email) => {
    setEmail(email);
  };

  const onSend = () => {
    if (isValidEmail) {
      // here should be api call to sent an email
      resetPassword({ email })
        // 401 should be handled here but we need to simulate this flow
        .then(() => {
          toast.success("Email is on your way!");

          // just simulation
          setTimeout(() => {
            navigate("/reset-password/imagine_that_here_is_token");
          }, 1000);
        })
        .catch((err) => {
          toast.error(COMMON_ERROR);
          console.error(err);
        });
    } else {
      // just show input validation error
      setCanShowErrors(true);
    }
  };

  const onCancel = () => {
    navigate("/login");
  };

  return (
    <div className="flex-column fill-width login-wrapper">
      <EmailInput
        onEmailChange={onEmailChange}
        className="fill-width"
        showError={canShowErrors}
      />

      <button className="primary-btn" onClick={onSend}>
        Send
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ForgotPassword;
