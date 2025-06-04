import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Inspirational from "./components/Inspirational";
import LovePage from "./components/LovePage";
import FunnyQuotes from "./components/FunnyQuotes";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funny" element={<FunnyQuotes />} />
        <Route path="/inspirational" element={<Inspirational />} />
        <Route path="/love" element={<LovePage />} />
       
        
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}