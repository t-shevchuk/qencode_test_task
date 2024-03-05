// we can also create component for third party login
// and pass there logo, name & on login
// don't do it because usually it differs a bit

import githubLogo from "../../assets/github.svg";

const GithubLogin = () => {
  const handleLogin = () => {
    alert("Github login process");
    // TODO: api call
    // then redirect to portal if success
    // catch error with unauthorized, canceled by user, etc
  };

  return (
    <button
      onClick={handleLogin}
      className="flex-centered flex-1 font-weight-500 font-size-14"
      style={{ gap: 8 }}
    >
      <img src={githubLogo} alt="Github" />
      Github
    </button>
  );
};

export default GithubLogin;
