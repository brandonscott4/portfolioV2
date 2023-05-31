import { IconMoonStars } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="w-full h-16 flex justify-between items-center shadow-md px-24">
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
          <div className="bg-sky-600 rounded-md px-2 py-2">
            <NavLink exact to="contact">
              <p className="text-white text-sm">Contact Me</p>
            </NavLink>
          </div>
          <div className="bg-slate-200 rounded-md px-2 py-2">
            <IconMoonStars />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
