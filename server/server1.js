const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB Compass
const MONGODB_URI = "mongodb://127.0.0.1:27017/contactDB"; // Use your database name
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit process on failure
  });

// ✅ Multer Storage for File Uploads (Resumes)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// ✅ Job Application Schema
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  resume: String, // Stores file path
});

const Application = mongoose.model("Application", applicationSchema);

// ✅ API Route to Handle Job Applications
app.post("/api/career", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const resumePath = req.file ? req.file.path : "";

    const newApplication = new Application({ name, email, phone, resume: resumePath });
    await newApplication.save();

    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("❌ Error submitting application:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get All Job Applications (For Admin Panel)
app.get("/api/career", async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error("❌ Error fetching applications:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Serve Uploaded Resumes
app.use("/uploads", express.static("uploads"));

// ✅ Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
