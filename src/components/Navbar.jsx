import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Fun Quotes</Link>
      <Link to="/inspirational" className="nav-link">Inspirational</Link>
      <Link to="/love" className="nav-link">Love</Link>
      <Link to="/life" className="nav-link">Life</Link>
      <Link to="/friendship" className="nav-link">Friendship</Link>
    </nav>
  );
}

export default Navbar;