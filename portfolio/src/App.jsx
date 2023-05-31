import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1 justify-center items-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
