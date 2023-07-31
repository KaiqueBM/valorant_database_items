import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
