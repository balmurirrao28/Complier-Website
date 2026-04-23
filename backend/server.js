console.log("🔥 NEW SERVER VERSION RUNNING 🔥");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const compilerRoute = require("./routes/compiler");
const authRoute = require("./routes/auth");

const app = express();

/* =========================
   ✅ Middleware
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   ✅ Routes
========================= */

// API routes FIRST
app.use("/api/auth", authRoute);
app.use("/api/compiler", compilerRoute);
app.post("/api/save", (req, res) => {
  const { code, language, user } = req.body;

  console.log("Saving:", code, language, user);

  res.json({ message: "Code saved ✅" });
});

// Test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

// Root route
app.get("/", (req, res) => {
  res.send("Backend UPDATED VERSION 🚀");
});

/* =========================
   ❌ 404 (MUST BE LAST)
========================= */
app.use((req, res) => {
  res.status(404).send("Route not found: " + req.originalUrl);
});

/* =========================
   ✅ Server Start
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});