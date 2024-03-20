import { Link } from "react-router-dom";

export default function MenuDropDown({ isOpen }) {
  return (
    isOpen && (
      <div className="absolute px-6 py-2 text-black bg-white top-[82px] hidden md:flex  z-50 overflow-x-hidden rounded-b-xl shadow-md w-[20vw] lg:w-[15vw] transition duration-200  right-0  text-sm ">
        <ul className="flex flex-col cursor-pointer">
          <li>
            <Link
              to="/"
              className="block py-3 font-semibold transition md:hidden hover:bg-neutral-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="py-2 font-semibold transition hover:bg-neutral-100"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <button className="py-2 font-semibold transition hover:bg-neutral-100 text-start">
              Logout
            </button>
          </li>
        </ul>
      </div>
    )
  );
}
