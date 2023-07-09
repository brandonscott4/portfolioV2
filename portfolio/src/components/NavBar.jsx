import { IconMoonStars } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <nav className="w-full h-16 flex justify-between items-center shadow-xl px-24">
            <p className="font-bold text-xl text-">Brandon Scott</p>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="flex justify-center items-center gap-12">
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
                <div className="divider divider-horizontal"></div>
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
              </ul>
            </div>
          </nav>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="p-4 w-80 h-full bg-white">
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
            <div className="flex justify-center items-center gap-4 mt-4">
              <NavLink exact to="contact">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 rounded-md font-bold px-2 py-2 text-white text-sm">
                  Contact Me
                </button>
              </NavLink>
              <div className="bg-slate-200 rounded-md px-2 py-2">
                <IconMoonStars />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
