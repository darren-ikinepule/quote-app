import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuotePage from "./components/QuotePage";
import Inspirational from "./components/Inspirational";
import LovePage from "./components/LovePage";
// ...other imports

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuotePage />} />
        <Route path="/inspirational" element={<Inspirational />} />
        <Route path="/love" element={<LovePage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;