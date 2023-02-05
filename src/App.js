import logo from "./logo.svg";
import "./App.css";
import Cars from "./pages/Cars";
import DetailCar from "./pages/DetailCar";
import Home from "./pages/Home";
import SearchBar from "./pages/SearchBar"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<SearchBar />} />
        <Route path="/listmobil" element={<Cars />} />
        <Route path="/detailmobil/:id" element={<DetailCar />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
