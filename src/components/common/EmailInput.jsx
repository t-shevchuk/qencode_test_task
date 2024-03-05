import { useState } from "react";

const EmailInput = ({
  placeholder = "Enter your email",
  onEmailChange = () => {},
  className = "",
  showError = false,
}) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setEmail(value);
    onEmailChange(value);
  };

  return (
    <div className={`flex-column ${className}`}>
      <input placeholder={placeholder} onChange={handleChange} value={email} />
      {showError && <div className="error-text">Please enter valid email</div>}
    </div>
  );
};

export default EmailInput;
