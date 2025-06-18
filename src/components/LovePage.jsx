import React, { useState } from "react";
import loveQuotes from "../scripts/love-page";
import "../styles/love-page.css";

function getLoveQuote(current) {
  let quote;
  do {
    quote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  } while (quote === current && loveQuotes.length > 1);
  return quote;
}

function LovePage() {
  const [quote, setQuote] = useState(getLoveQuote());
  const [roseShower, setRoseShower] = useState(false);

  const handleNewQuote = () => {
    setQuote(getLoveQuote(quote));
  };

  const handleRoseClick = () => {
    setRoseShower(true);
    setTimeout(() => setRoseShower(false), 2000); // Show roses for 2 seconds
  };

  // Generate 50 falling roses with random positions
  const roses = Array.from({ length: 50 }).map((_, i) => (
    <span
      key={i}
      className="falling-rose"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random()}s`,
        fontSize: `${16 + Math.random() * 16}px`,
      }}
      role="img"
      aria-label="falling rose"
    >
      🌹
    </span>
  ));

  return (
    <div className="love-container">
      {roseShower && <div className="rose-shower">{roses}</div>}
      <div className="love-decor top">
        <span role="img" aria-label="flower">🌸</span>
        <span role="img" aria-label="heart">❤️</span>
        <span role="img" aria-label="cupid">💘</span>
        <span role="img" aria-label="flower">🌺</span>
        <span role="img" aria-label="heart">💕</span>
      </div>
      <h2 className="love-title">
        <span role="img" aria-label="heart">💖</span> Random Love Quote <span role="img" aria-label="heart">💖</span>
      </h2>
      <div className="love-quote-box">
        <span className="love-side-decor left">
          <span
            role="img"
            aria-label="flower"
            style={{ cursor: "pointer" }}
            onClick={handleRoseClick}
          >
            🌹
          </span>
          <span role="img" aria-label="heart">💞</span>
        </span>
        <p className="love-quote">"{quote}"</p>
        <span className="love-side-decor right">
          <span role="img" aria-label="cupid">🏹</span>
          <span role="img" aria-label="heart">💓</span>
        </span>
      </div>
      <div className="love-decor bottom">
        <span role="img" aria-label="flower">🌷</span>
        <span role="img" aria-label="heart">💝</span>
        <span role="img" aria-label="cupid">💘</span>
        <span role="img" aria-label="flower">🌼</span>
        <span role="img" aria-label="heart">💗</span>
      </div>
      <button className="love-btn" onClick={handleNewQuote}>
        New Love Quote
      </button>
    </div>
  );
}

export default LovePage;