import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Importing CSS for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for user data in localStorage when component mounts
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
    // Toggle body scroll when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navLinks = document.querySelector('.nav-links');
      const menuIcon = document.querySelector('.menu-icon');
      
      if (menuOpen && navLinks && !navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        setMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="logo">PPS</Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/clients" onClick={() => setMenuOpen(false)}>Clients</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link>
          
          {user ? (
            <div className="user-menu">
              <div className="user-info">
                <span className="user-name">Hi, {user.firstName || 'User'}</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className="dropdown-content">
                <Link to="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link>
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/auth" className="login-button" onClick={() => setMenuOpen(false)}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
