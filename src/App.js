import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/shared/Navbar/Navbar";
import About from "./pages/Home/About/About";
import NotFound from "./pages/shared/NotFound/NotFound";
import Services from "./pages/Home/Services/Services/Services";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
