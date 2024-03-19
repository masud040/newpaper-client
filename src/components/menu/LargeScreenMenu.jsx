import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { createUserAvatar } from "../../utils";
import MenuDropDown from "../shared/MenuDropDown";

const LargeScreenMenu = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ul className="items-center hidden space-x-2 text-sm md:flex">
        {user?.email && (
          <>
            <li>
              <Link
                to="/add-article"
                className="px-4 py-2 text-white transition-all duration-200 bg-indigo-600 rounded-md md:py-3 hover:bg-indigo-700"
              >
                Add Articles
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
          </>
        )}
        <li>
          <Link to="/all-article" className="text-white">
            All Articles
          </Link>
        </li>
        <li>
          {user?.email ? (
            <div
              onClick={() => setIsOpen((p) => !p)}
              className="text-white bg-orange-600 avater-img"
            >
              {user?.photoURL ? (
                <img
                  className="avater-img"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              ) : (
                <span className="">{createUserAvatar(user?.displayName)}</span>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="transition-all duration-200 text-white/50 hover:text-white"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
      <MenuDropDown isOpen={isOpen} />
    </>
  );
};

export default LargeScreenMenu;
