import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function MenuDropDown({ isOpen }) {
  const { user } = useAuth();
  return (
    isOpen && (
      <div className="absolute right-0 px-6 py-2 text-black bg-white rounded-b-lg top-[100px]">
        <ul>
          <li>
            <h3>{user?.displayName}</h3>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </div>
    )
  );
}
