import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to AUTHsystem</h1>
      <p className="home-message">
        Hey there! Welcome to AUTHsystem, a simple and secure way to manage user authentication.
        This is a personal project I built to explore how to securely handle login and registration
        for users.
      </p>
      <ul>
        <li><i>If you already have an account, hit the Login button to get started.</i></li>
        <li><i>If you're new here, go ahead and Register to try it out!</i></li>
      </ul>

      <p>
        I’ve used bcrypt for password hashing and JWT to make sure user sessions are safe. This
        project is a part of my portfolio, and I’m excited to share it with you!
      </p>
      <p>Feel free to test it out, and thanks for stopping by!</p>

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
