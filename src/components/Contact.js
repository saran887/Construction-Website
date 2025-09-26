import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // Import CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      <p className="contact-description">
        PPS Construction is here to answer your questions, discuss your project ideas, or provide more information about our services.<br />
        <b>Office Address:</b> 123 Main Road, Chennai, Tamil Nadu, India<br />
        <b>Email:</b> info@ppsconstruction.com<br />
        <b>Phone:</b> +91 99000 49911<br /><br />
        Our team will respond to your inquiry as soon as possible. We look forward to connecting with you!
      </p>

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
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject of your message"
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
