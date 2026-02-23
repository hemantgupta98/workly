import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// health check (VERY IMPORTANT for Render)
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is running 🚀",
  });
});

// example API
app.get("/api/test", (req, res) => {
  res.json({ message: "API working fine" });
});

// REQUIRED for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
