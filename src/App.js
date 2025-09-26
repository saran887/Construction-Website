import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Career from './components/Career';
import Profile from './components/Profile';
import AuthPage from './components/auth/AuthPage';
import './App.css';

// Layout component to handle conditional footer rendering
const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth' || location.pathname === '/signup';
  const isProfilePage = location.pathname === '/profile';
  
  return (
    <div className="app-container">
      {!isAuthPage && <Navbar />}
      <main className={`main-content ${isAuthPage ? 'auth-page' : ''} ${isProfilePage ? 'profile-page' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage initialMode="signup" />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      {!isAuthPage && !isProfilePage && (
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>PPS Construction</h3>
              <p>Building the future with excellence since 1956</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: info@ppsconstruction.com</p>
              <p>Phone: +91 99000 49911</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} PPS Construction. All Rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
