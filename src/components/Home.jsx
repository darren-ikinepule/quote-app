import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home-page.css"; 
import funme1 from "../assets/funme1.jpg"; // <-- import the image

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/funny"); // Change to your main quotes route
  };

  return (
    <div className="home-container">
      <img src={funme1} alt="Home" className="home-image" />
      <button className="home-btn" onClick={handleClick}>
        Lets Go
      </button>
    </div>
  );
};

export default Home;