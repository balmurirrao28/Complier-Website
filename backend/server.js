console.log("🔥 NEW SERVER VERSION RUNNING 🔥");
console.log("🔥 NEW VERSION RUNNING 🔥");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const compilerRoute = require("./routes/compiler");
const authRoute = require("./routes/auth");

const app = express();

/* =========================
   ✅ Middleware
========================= */

// Allow all origins (good for now, can restrict later)
app.use(cors());

// Parse JSON
app.use(express.json());

/* =========================
   ✅ Routes
========================= */

app.use("/api/auth", authRoute);
app.use("/api/compiler", compilerRoute);

// Test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

// Root route
app.get("/", (req, res) => {
  res.send("Backend UPDATED VERSION 🚀");
});

/* =========================
   ✅ Server Start
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});