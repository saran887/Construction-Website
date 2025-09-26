import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    address: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    
    if (!userData) {
      navigate('/auth');
      return;
    }
    
    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setFormData({
        firstName: parsedUser.firstName || '',
        lastName: parsedUser.lastName || '',
        email: parsedUser.email || '',
        phone: parsedUser.phone || '',
        company: parsedUser.company || '',
        designation: parsedUser.designation || '',
        address: parsedUser.address || ''
      });
      setLoading(false);
    } catch (error) {
      console.error('Error parsing user data:', error);
      setError('Unable to load profile. Please login again.');
      setLoading(false);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setMessage({ type: '', text: '' });
      
      // Example API call to update user profile
      // Replace with your actual endpoint
      // const response = await axios.put(`http://localhost:5000/api/users/${user._id}`, formData);
      
      // For now, just update the local storage
      const updatedUser = { ...user, ...formData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      setUser(updatedUser);
      setEditing(false);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 3000);
      
    } catch (err) {
      setMessage({ 
        type: 'error', 
        text: err.response?.data?.message || 'Failed to update profile. Please try again.' 
      });
    }
  };

  const handleCancel = () => {
    // Reset form data to original user data
    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || '',
      company: user.company || '',
      designation: user.designation || '',
      address: user.address || ''
    });
    setEditing(false);
  };

  if (loading) {
    return <div className="profile-container loading">Loading profile...</div>;
  }

  if (error) {
    return (
      <div className="profile-container error">
        <p>{error}</p>
        <button onClick={() => navigate('/auth')} className="btn-primary">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account information</p>
      </div>
      
      {message.text && (
        <div className={`profile-message ${message.type}`}>
          {message.text}
        </div>
      )}
      
      <div className="profile-card">
        <div className="profile-avatar">
          <div className="avatar-placeholder">
            {user.firstName && user.firstName.charAt(0).toUpperCase()}
            {user.lastName && user.lastName.charAt(0).toUpperCase()}
          </div>
          <h2>{user.firstName} {user.lastName}</h2>
          <p className="profile-email">{user.email}</p>
          {!editing && (
            <button 
              onClick={() => setEditing(true)} 
              className="btn-edit"
            >
              Edit Profile
            </button>
          )}
        </div>
        
        <div className="profile-details">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                {editing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                ) : (
                  <p className="profile-info">{user.firstName || 'Not provided'}</p>
                )}
              </div>
              
              <div className="form-group">
                <label>Last Name</label>
                {editing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                ) : (
                  <p className="profile-info">{user.lastName || 'Not provided'}</p>
                )}
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <p className="profile-info">{user.email}</p>
                <small className="text-muted">Email cannot be changed</small>
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                {editing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                ) : (
                  <p className="profile-info">{user.phone || 'Not provided'}</p>
                )}
              </div>
              
              <div className="form-group">
                <label>Company</label>
                {editing ? (
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                ) : (
                  <p className="profile-info">{user.company || 'Not provided'}</p>
                )}
              </div>
              
              <div className="form-group">
                <label>Designation</label>
                {editing ? (
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                ) : (
                  <p className="profile-info">{user.designation || 'Not provided'}</p>
                )}
              </div>
            </div>
            
            <div className="form-group full-width">
              <label>Address</label>
              {editing ? (
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={!editing}
                  rows="3"
                />
              ) : (
                <p className="profile-info address">{user.address || 'Not provided'}</p>
              )}
            </div>
            
            {editing && (
              <div className="button-group">
                <button type="submit" className="btn-save">Save Changes</button>
                <button type="button" onClick={handleCancel} className="btn-cancel">Cancel</button>
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div className="profile-sections">
        <div className="profile-section">
          <h3>Recent Projects</h3>
          <p className="no-data">No recent projects found.</p>
          <button className="btn-outline">View All Projects</button>
        </div>
        
        <div className="profile-section">
          <h3>Upcoming Services</h3>
          <p className="no-data">No upcoming services scheduled.</p>
          <button className="btn-outline">Schedule a Service</button>
        </div>
      </div>
      
      <div className="profile-footer">
        <h3>Account Settings</h3>
        <div className="settings-options">
          <div className="setting-option">
            <h4>Change Password</h4>
            <p>Update your password for enhanced security</p>
            <button className="btn-text">Change Password</button>
          </div>
          
          <div className="setting-option">
            <h4>Notification Preferences</h4>
            <p>Manage your email and SMS notifications</p>
            <button className="btn-text">Update Preferences</button>
          </div>
          
          <div className="setting-option danger">
            <h4>Delete Account</h4>
            <p>Permanently delete your account and all data</p>
            <button className="btn-text danger">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
