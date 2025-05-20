import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing CSS for styling

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">PPS</Link>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/career">Career</Link>
        <Link to="/auth" className="login-button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
