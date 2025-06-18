import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Inspirational from "./components/Inspirational";
import LovePage from "./components/LovePage";
import FunnyQuotes from "./components/FunnyQuotes";
import JokePage from "./components/JokePage";
import "./App.css"; // Import a general App.css for layout

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <div className="app-container"> {/* Wrap everything in a container */}
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jokes" element={<JokePage />} />
        <Route path="/funny" element={<FunnyQuotes />} />
        <Route path="/inspirational" element={<Inspirational />} />
        <Route path="/love" element={<LovePage />} />
      </Routes>
        
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}