import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const Links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "mr-10 text-primary "
            : "mr-10 hover:text-primary transition-colors"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/browse"
        className={({ isActive }) =>
          isActive
            ? "mr-10 text-primary "
            : "mr-10 hover:text-primary transition-colors"
        }
      >
        Browse Tasks
      </NavLink>
      <NavLink
        to="/add-task"
        className={({ isActive }) =>
          isActive
            ? "mr-10 text-primary "
            : "mr-10 hover:text-primary transition-colors"
        }
      >
        Add Task
      </NavLink>
      <NavLink
        to="/my-posted-tasks"
        className={({ isActive }) =>
          isActive
            ? "mr-10 text-primary "
            : "mr-10 hover:text-primary transition-colors"
        }
      >
        My Posted Task
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="font-bold text-xl">TaskConnect</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <Link className="btn btn-outline btn-primary" to="/login">
          Log in
        </Link>
        <Link className="btn btn-primary" to="/register">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
