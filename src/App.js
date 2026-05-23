import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">kvnwave</Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <a href="https://github.com/kvnwave" target="_blank" className="btn-primary">github</a>
        </div>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;