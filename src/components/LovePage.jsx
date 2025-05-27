import React, { useState } from "react";
import loveQuotes from "../scripts/love-page";
import "../styles/love-page.css";

function getRandomQuote(current) {
  let quote;
  do {
    quote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  } while (quote === current && loveQuotes.length > 1);
  return quote;
}

function LovePage() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote(quote));
  };

  return (
    <div className="love-container">
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
          <span role="img" aria-label="flower">🌹</span>
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