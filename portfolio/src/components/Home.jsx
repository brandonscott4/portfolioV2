import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import profilepic from "../assets/profilepic.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={profilepic} className="h-44 w-44 mb-4"></img>

      <h1 className="font-bold text-3xl">Brandon Scott</h1>
      <h3 className="text-gray-600 mb-4">Im a Software developer</h3>

      <div className="flex gap-6">
        <a
          href="https://github.com/brandonscott4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/brandon-scott-65b669268/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin />
        </a>
      </div>

      <NavLink exact to="contact">
        <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-3xl">
          Say Hi 👋
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
