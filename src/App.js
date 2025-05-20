import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Career from './components/Career';
import AuthPage from './components/auth/AuthPage'; // single auth component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;
