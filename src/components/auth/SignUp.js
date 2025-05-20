// src/components/auth/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSignup} className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="block w-full mb-2 p-2 border"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="block w-full mb-4 p-2 border"/>
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default SignUp;
