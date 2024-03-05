import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmailInput from "../common/EmailInput";

import { validateEmail } from "../../utils/validators";

import "./Login.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [showErrors, setShowErrors] = useState(false);

  const [email, setEmail] = useState("");

  const isValidEmail = useMemo(() => validateEmail(email), [email]);

  useEffect(() => {
    if (showErrors && isValidEmail) {
      setShowErrors(false);
    }
  }, [showErrors, isValidEmail]);

  const onEmailChange = (email) => {
    setEmail(email);
  };

  const onSend = () => {
    if (isValidEmail) {
      // here should be api call to sent an email
      setTimeout(() => {
        navigate("/reset-password");
      }, 1000);
    } else {
      setShowErrors(true);
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
        showError={showErrors}
      />

      <button className="primary-btn" onClick={onSend}>
        Send
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ForgotPassword;
