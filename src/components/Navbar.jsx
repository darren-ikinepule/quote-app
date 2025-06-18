import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/jokes" className="nav-link">Jokes</Link>
      <Link to="/funny" className="nav-link">Fun</Link>
      <Link to="/inspirational" className="nav-link">Inspirational</Link>
      <Link to="/love" className="nav-link">Love</Link>
      
    </nav>
  );
}

export default NavBar;