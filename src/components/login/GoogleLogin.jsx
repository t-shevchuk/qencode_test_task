import googleLogo from "../../assets/google.svg";

const GoogleLogin = () => {
  const handleLogin = () => {
    alert("Google login process");
    // here should be an api call
    // then redirect to portal if success
    // catch errors with unauthorized, canceled by user, etc
  };

  return (
    <button
      className="flex-centered flex-1 font-weight-500 font-size-14"
      style={{ gap: 8 }}
      onClick={handleLogin}
    >
      <img src={googleLogo} alt="Google" />
      Google
    </button>
  );
};

export default GoogleLogin;
