import React, { useState } from 'react';
import axios from 'axios';

const COMPANY_NAME = "BuildRight Construction";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/auth/login' : '/api/auth/signup';
    try {
      const res = await axios.post(url, { email, password });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.logo}>{COMPANY_NAME}</div>
        <h2 style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p style={styles.linkText}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} style={styles.link}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
        <p style={styles.error}>{msg}</p>
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
  linkText: {
    marginTop: '18px',
    fontSize: '15px',
    color: '#555',
  },
  link: {
    color: '#fc4a1a',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 500,
  },
  error: {
    color: '#fc4a1a',
    marginTop: '10px',
    minHeight: '20px',
    fontWeight: 500,
  },
};

export default AuthPage;
