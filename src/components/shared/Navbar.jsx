import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import LargeScreenMenu from "../menu/LargeScreenMenu";
import SmallScreenMenu from "../menu/SmallScreenMenu";
export default function Navbar() {
  return (
    <header>
      <nav className="container relative">
        <div className="hidden md:flex">
          <Link to="/">
            <img className="w-32" src={Logo} alt="lws" />
          </Link>
        </div>
        <LargeScreenMenu />
        <SmallScreenMenu />
      </nav>
    </header>
  );
}
