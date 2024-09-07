import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Thank You BrightChamps Team!</h1>
      <p className="home-message">
        I really appreciate this opportunity and look forward to contributing to your team.
      </p>

      <div className="button-container">
        <Link to="/auth/login">
          <button className="home-button">Test Login</button>
        </Link>
        <Link to="/auth/register">
          <button className="home-button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
