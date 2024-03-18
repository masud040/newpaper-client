import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
export default function Navbar() {
  return (
    <header>
      <nav className="container">
        <div>
          <Link to="/">
            <img className="w-32" src={Logo} alt="lws" />
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="/add-article"
                className="px-6 py-2 text-white transition-all duration-200 bg-indigo-600 rounded-md md:py-3 hover:bg-indigo-700"
              >
                Add Articles
              </Link>
            </li>
            <li>
              <Link to="/all-article" className="text-white">
                All Articles
              </Link>
            </li>
            <li>
              <Link to="/subscription" className="text-white ">
                Subscription
              </Link>
            </li>

            <li>
              <Link to="/Premium-articles" className="text-white ">
                Premium Articles
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="transition-all duration-200 text-white/50 hover:text-white"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
