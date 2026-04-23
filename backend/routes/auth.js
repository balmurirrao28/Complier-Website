const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  const demoEmail = process.env.DEMO_EMAIL || "demo@codeportal.local";
  const demoPassword = process.env.DEMO_PASSWORD || "demo123";

  if (email === demoEmail && password === demoPassword) {
    return res.json({
      ok: true,
      user: { email },
    });
  }

  return res.status(401).json({ error: "Invalid email or password." });
});

module.exports = router;
