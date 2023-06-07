import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <NavBar />
        <div className="flex flex-1 justify-center items-center bg-gradient-to-r from-sky-500/50 to-indigo-500/50 w-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
