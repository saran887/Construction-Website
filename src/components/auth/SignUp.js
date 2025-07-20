// src/components/auth/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const COMPANY_NAME = "BuildRight Construction";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/signup', { email, password });
      alert(res.data.message);
      navigate('/signin');
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.logo}>{COMPANY_NAME}</div>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #f7b733 0%, #fc4a1a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
    padding: '40px 32px',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #f7b733',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#fc4a1a',
    marginBottom: '16px',
    letterSpacing: '1px',
    textShadow: '1px 1px 0 #f7b733',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
    fontWeight: 600,
    fontSize: '1.5rem',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border 0.2s',
  },
  button: {
    padding: '12px',
    background: 'linear-gradient(90deg, #f7b733 0%, #fc4a1a 100%)',
    color: '#fff',
    fontWeight: 600,
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '8px',
    boxShadow: '0 2px 8px rgba(252, 74, 26, 0.1)',
    letterSpacing: '1px',
  },
};

export default SignUp;
