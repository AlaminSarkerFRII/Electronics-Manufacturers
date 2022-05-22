import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/shared/Navbar/Navbar";
import About from "./pages/Home/About/About";
import NotFound from "./pages/shared/NotFound/NotFound";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Tools from "./pages/Home/Services/Tools/Tools";
import Summary from "./pages/Home/Summary/Summary";

// aso animation

// useEffect(() => {
//   <script>AOS.init();</script>;
// }, []);

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
