import React, { useState } from "react";
import axios from "axios";
import "./Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
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
  data.append("position", formData.position);
  data.append("linkedin", formData.linkedin);
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
      <h2>Join Our Team</h2>
      <p style={{marginBottom: '22px', color: '#555', fontSize: '1.08rem'}}>
        At PPS Construction, we believe our people are our greatest strength. We’re always looking for talented, passionate individuals to join our growing team.<br /><br />
        <b>Why work with us?</b><br />
        • Work on landmark projects across India<br />
        • Collaborative, growth-focused environment<br />
        • Competitive compensation and benefits<br /><br />
        <b>How to apply:</b> Fill out the form below and upload your resume. Our HR team will review your application and contact you if your profile matches our requirements.
      </p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Position Applying For:</label>
        <input type="text" name="position" value={formData.position} onChange={handleChange} required placeholder="e.g. Site Engineer, Project Manager" />

        <label>LinkedIn Profile:</label>
        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/yourprofile" />

        <label>Upload Resume:</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Career;
