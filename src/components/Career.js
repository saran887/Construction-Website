import React, { useState } from "react";
import axios from "axios";
import "./Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("resume", formData.resume);

    try {
      await axios.post("http://localhost:5001/api/career", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Application submitted successfully!");
      setFormData({ name: "", email: "", phone: "", resume: null });
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="career-container">
      <h2>Apply for a Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Upload Resume:</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Career;
