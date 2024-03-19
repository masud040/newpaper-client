import { NavLink } from "react-router-dom";

const Link = ({ path, title }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "bg-indigo-200 flex p-1 px-4"
          : "p-1 px-4"
      }
    >
      {title}
    </NavLink>
  );
};

export default Link;
