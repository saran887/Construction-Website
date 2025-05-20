import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // Import CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">We’d love to hear from you! Send us a message.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>

        {status === "success" && <p className="success-message">Message sent successfully!</p>}
        {status === "error" && <p className="error-message">Failed to send message. Try again.</p>}
      </form>
    </div>
  );
};

export default Contact;
