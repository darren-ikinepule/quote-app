import React, { useState } from "react";
import funnyQuotes from "../scripts/funnyQuotes";
import "../styles/funny-quotes.css"; 

function getRandomQuote(current) {
  let quote;
  do {
    quote = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
  } while (quote === current && funnyQuotes.length > 1);
  return quote;
}

function FunnyQuotes() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote(quote));
  };

  return (
    <div className="quote-container">
      <div className="quote-title">
        <span className="mini-bounce" role="img" aria-label="laughing cat">😹</span>
        &nbsp;Random Funny Quote&nbsp;
        <span className="mini-bounce" role="img" aria-label="laughing monkey">🙊</span>
      </div>
      <p className="quote-text">{quote}</p>
      <button className="quote-btn" onClick={handleNewQuote}>
        New Quote
      </button>
      <div className="static-emojis-row">
        <span role="img" aria-label="laughing dog">🐶</span>
        <span role="img" aria-label="laughing fox">🦊</span>
        <span role="img" aria-label="laughing panda">🐼</span>
        <span role="img" aria-label="laughing rabbit">🐰</span>
      </div>
    </div>
  );
}

export default FunnyQuotes;