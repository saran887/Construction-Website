import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      alert('Login successful!');
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.linkText}>
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '60px auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer'
  },
  error: {
    color: 'red'
  },
  linkText: {
    marginTop: '15px'
  }
};

export default SignIn;
