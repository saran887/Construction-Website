// src/components/auth/SignUp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const COMPANY_NAME = "PPS Construction";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    address: '',
    password: '',
    confirmPassword: '',
    acceptMarketing: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  // Clear message after 5 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Validate phone (optional but format check)
    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Company is optional
    
    // Designation is optional
    
    // Address is optional
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms validation removed as requested
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { 
        email: formData.email, 
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        company: formData.company,
        designation: formData.designation,
        address: formData.address,
        acceptMarketing: formData.acceptMarketing
      });
      
      setMessage({
        type: 'success',
        text: 'Registration successful! Redirecting to login...'
      });
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        address: '',
        password: '',
        confirmPassword: '',
        acceptMarketing: false,
      });
      
      // Redirect to signin after 2 seconds
      setTimeout(() => {
        navigate('/auth');
      }, 2000);
      
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed. Please try again.";
      setMessage({
        type: 'error',
        text: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">{COMPANY_NAME}</div>
        <h2 className="auth-title">Create Account</h2>
        
        {message.text && (
          <div className={`auth-message ${message.type}`}>
            {message.text}
          </div>
        )}
        
        <form onSubmit={handleSignup} className="auth-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`auth-input ${errors.firstName ? 'error' : ''}`}
            />
            {errors.firstName && <div className="input-error">{errors.firstName}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`auth-input ${errors.lastName ? 'error' : ''}`}
            />
            {errors.lastName && <div className="input-error">{errors.lastName}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`auth-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <div className="input-error">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`auth-input ${errors.phone ? 'error' : ''}`}
              placeholder="e.g. +1 123-456-7890"
            />
            {errors.phone && <div className="input-error">{errors.phone}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Company (optional)</label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="auth-input"
              placeholder="Your company name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="designation">Job Title (optional)</label>
            <input
              id="designation"
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="auth-input"
              placeholder="Your job title"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address (optional)</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="auth-input"
              placeholder="Your address"
              rows="2"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`auth-input ${errors.password ? 'error' : ''}`}
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <div className="input-error">{errors.password}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-wrapper">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`auth-input ${errors.confirmPassword ? 'error' : ''}`}
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && <div className="input-error">{errors.confirmPassword}</div>}
          </div>
          
          {/* Terms and marketing checkboxes removed as requested */}
          
          <button 
            type="submit" 
            className="auth-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
            {isSubmitting && <span className="loading-spinner"></span>}
          </button>
        </form>
        
        <p className="auth-link-text">
          Already have an account? <Link to="/auth" className="auth-link">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
