import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home-page.css";
import funme2 from "../assets/funme2.jpg"; // Import the image

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/funny"); // Change to your main quotes route
  };

  return (
    <div className="home-container">
      <img src={funme2} alt="Background" className="home-image" />
      <button className="home-btn" onClick={handleClick}>
        Lets Go
      </button>
    </div>
  );
};

export default Home;
