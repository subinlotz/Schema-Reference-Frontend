import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h2>Hey welcome back!</h2>
        <div className="button-group">
          <button onClick={() => navigate("/signup")} className="btn">Sign Up</button>
          <button onClick={() => navigate("/login")} className="btn">Login</button>
          <button onClick={() => navigate("/posts")} className="btn">Posts</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
