import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import home from '../assets/home-w.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="home-button"><img src={home} alt="home button" /></Link>
    </nav>
  );
};

export default Navbar;
