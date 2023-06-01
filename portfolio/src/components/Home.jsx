import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import profilepic from "../assets/profilepic.png";
import { NavLink } from "react-router-dom";
import { Tilt } from "react-tilt";

function Home() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <Tilt options={defaultOptions}>
      <div className="flex flex-col items-center justify-center bg-white p-14 rounded-xl shadow-2xl mb-24">
        <img src={profilepic} className="h-44 w-44 mb-4"></img>

        <h1 className="font-bold text-3xl">Brandon Scott</h1>
        <h3 className="text-gray-600 mb-4">Software developer</h3>

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
    </Tilt>
  );
}

export default Home;

// maybe add react (vanilla?) tilt to card
