import { IconMoonStars } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="w-full h-16 flex justify-between items-center shadow-xl px-24">
        <p className="font-bold text-xl text-">Brandon Scott</p>
        <ul className="flex gap-12">
          <li>
            <NavLink
              exact
              to="/"
              className="
              hover:underline
              decoration-2
              decoration-sky-500"
              /*activeClassName="decoration-2 decoration-sky-500 text-sky-500"*/
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="about"
              className="hover:underline decoration-2 decoration-sky-500"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="projects"
              className="hover:underline decoration-2 decoration-sky-500"
            >
              Projects
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-4">
          <NavLink exact to="contact">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 rounded-md font-bold px-2 py-2 text-white text-sm">
              Contact Me
            </button>
          </NavLink>
          <div className="bg-slate-200 rounded-md px-2 py-2">
            <IconMoonStars />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
