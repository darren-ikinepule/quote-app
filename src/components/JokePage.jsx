import { useState } from "react";
import "../styles/jokes.css";

const url = "https://official-joke-api.appspot.com/random_joke";

const JokePage = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomJoke = async () => {
    setJoke({});
    setIsLoading(true);

    const response = await fetch(url);
    const result = await response.json();

    setJoke(result);
    setIsLoading(false);
  };

  const isFirstRender = !joke.setup && !isLoading;

  return (
    <>
      <div className="joker-container">
        <div className="joke-content">
          {joke.setup ? (
            <>
              <p className="joke-setup">{joke.setup}</p>
              <p className="joke-punchline">{joke.punchline}</p>
            </>
          ) : null}
        </div>
        <p className="joke-message">{isFirstRender && "Click for a joke"}</p>
        <p className="joke-loading">{isLoading && "Loading..."}</p>
        <button className="joke-btn" onClick={fetchRandomJoke}>
          New Joke!
        </button>
      </div>
    </>
  );
};

export default JokePage;
