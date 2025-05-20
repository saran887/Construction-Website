import React, { useState } from 'react';
import axios from 'axios';

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
    <div style={styles.container}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
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
      <p style={{ color: 'red' }}>{msg}</p>
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer'
  },
  linkText: {
    marginTop: '15px',
    fontSize: '14px'
  },
  link: {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline'
  }
};

export default AuthPage;
