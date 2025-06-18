import React, { useState } from "react";
import inspirationalQuotes from "../scripts/inspirational";
import "../styles/inspirational.css";

function getInspirationalQuote(current) {
  let quote;
  do {
    quote =
      inspirationalQuotes[
        Math.floor(Math.random() * inspirationalQuotes.length)
      ];
  } while (quote === current && inspirationalQuotes.length > 1);
  return quote;
}

function Inspirational() {
  const [quote, setQuote] = useState(getInspirationalQuote());

  const handleNewQuote = () => {
    setQuote(getInspirationalQuote(quote));
  };

  return (
    <div className="inspirational-container">
      <div className="inspirational-content">
        <h2 className="inspirational-title">🌲 Inspirational Quote 🌊</h2>
        <p className="inspirational-quote">{quote}</p>
        <button className="inspirational-btn" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>

      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Inspirational;