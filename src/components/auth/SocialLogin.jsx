import GithubIcon from "../../assets/icons/github.svg";
import GoogleIcon from "../../assets/icons/google.svg";
export default function SocialLogin({ googleTitle, githubTitle }) {
  return (
    <div>
      <div className="social-menu">
        <img src={GoogleIcon} alt="" />
        <h1>{googleTitle}</h1>
      </div>
      <div className="social-menu">
        <img src={GithubIcon} alt="" />
        <h1>{githubTitle}</h1>
      </div>
    </div>
  );
}
