import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const COMPANY_NAME = "PPS Construction";
const TAGLINE = "Building Excellence Since 1956";

const AuthPage = ({ initialMode = 'login' }) => {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    phone: '',
    company: '',
    designation: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    
    // Always validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Always validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isLogin && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Additional validations for signup
    if (!isLogin) {
      // Validate first name
      if (!formData.firstName?.trim()) {
        newErrors.firstName = 'First name is required';
      }
      
      // Validate last name
      if (!formData.lastName?.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      
      // Validate password confirmation
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      // Validate phone (if provided)
      if (formData.phone && !/^\+?\d{10,15}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      
      // Terms validation removed as requested
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/signup';
      const payload = isLogin 
        ? { email: formData.email, password: formData.password } 
        : { 
            email: formData.email, 
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone || '',
            company: formData.company || '',
            designation: formData.designation || '',
            address: formData.address || '',
            acceptMarketing: false // Set to false by default as checkbox removed
          };
      
      const res = await axios.post(url, payload);
      
      if (isLogin) {
        // Save user data on login
        localStorage.setItem('user', JSON.stringify(res.data));
        setMessage({
          type: 'success',
          text: 'Login successful! Redirecting...'
        });
        
        // Redirect to home after successful login
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        // Show success message on signup
        setMessage({
          type: 'success',
          text: 'Registration successful! You can now login.'
        });
        
        // Clear form and switch to login
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
          company: '',
          designation: '',
          address: ''
        });
        setIsLogin(true);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          (isLogin ? "Login failed. Please check your credentials." : "Registration failed. Please try again.");
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
        <div className="auth-logo-container">
          <div className="auth-logo">{COMPANY_NAME}</div>
          <div className="auth-tagline">{TAGLINE}</div>
        </div>
        
        <h2 className="auth-title">{isLogin ? 'Sign In to Your Account' : 'Create Your Account'}</h2>
        
        {message.text && (
          <div className={`auth-message ${message.type}`}>
            {message.text}
          </div>
        )}
        
        {/* Social login buttons removed as requested */}
        
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">
                  <span className="label-icon">👤</span> First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName || ''}
                  onChange={handleChange}
                  className={`auth-input ${errors.firstName ? 'error' : ''}`}
                  placeholder="John"
                />
                {errors.firstName && <div className="input-error">{errors.firstName}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">
                  <span className="label-icon">👤</span> Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName || ''}
                  onChange={handleChange}
                  className={`auth-input ${errors.lastName ? 'error' : ''}`}
                  placeholder="Doe"
                />
                {errors.lastName && <div className="input-error">{errors.lastName}</div>}
              </div>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">
              <span className="label-icon">✉️</span> Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`auth-input ${errors.email ? 'error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <div className="input-error">{errors.email}</div>}
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="phone">
                <span className="label-icon">📞</span> Phone Number
                <span className="field-info">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                className={`auth-input ${errors.phone ? 'error' : ''}`}
                placeholder="+91 9900049911"
              />
              {errors.phone && <div className="input-error">{errors.phone}</div>}
            </div>
          )}
          
          {!isLogin && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">
                  <span className="label-icon">🏢</span> Company
                  <span className="field-info">(Optional)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company || ''}
                  onChange={handleChange}
                  className="auth-input"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="designation">
                  <span className="label-icon">💼</span> Designation
                  <span className="field-info">(Optional)</span>
                </label>
                <input
                  id="designation"
                  type="text"
                  name="designation"
                  value={formData.designation || ''}
                  onChange={handleChange}
                  className="auth-input"
                  placeholder="Project Manager"
                />
              </div>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="password">
              <span className="label-icon">🔒</span> Password
            </label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`auth-input ${errors.password ? 'error' : ''}`}
                placeholder={isLogin ? "Enter your password" : "Minimum 6 characters"}
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
          
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  <span className="label-icon">🔒</span> Confirm Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword || ''}
                    onChange={handleChange}
                    className={`auth-input ${errors.confirmPassword ? 'error' : ''}`}
                    placeholder="Re-enter your password"
                  />
                </div>
                {errors.confirmPassword && <div className="input-error">{errors.confirmPassword}</div>}
              </div>
              
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="address">
                    <span className="label-icon">📍</span> Address
                    <span className="field-info">(Optional)</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address || ''}
                    onChange={handleChange}
                    className="auth-input"
                    placeholder="Your address"
                  />
                </div>
              )}
              
              {/* Terms and conditions checkboxes removed as requested */}
            </>
          )}
          
          <button 
            type="submit" 
            className="auth-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (isLogin ? 'Signing in...' : 'Creating Account...') : (isLogin ? 'Sign In' : 'Create Account')}
            {isSubmitting && <span className="loading-spinner"></span>}
          </button>
          
          {isLogin && (
            <div className="auth-divider">or continue with</div>
          )}
          
          {isLogin && (
            <div className="social-login">
              <button type="button" className="social-button google" title="Sign in with Google">
                G
              </button>
              <button type="button" className="social-button facebook" title="Sign in with Facebook">
                f
              </button>
              <button type="button" className="social-button linkedin" title="Sign in with LinkedIn">
                in
              </button>
            </div>
          )}
        </form>
        
        <p className="auth-link-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={() => {
            setIsLogin(!isLogin);
            setMessage({ type: '', text: '' });
            setErrors({});
          }} className="auth-link">
            {isLogin ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
