const express = require("express");
const axios = require("axios");

const router = express.Router();

/* =========================
   ✅ Language Map
========================= */
const languageMap = {
  python: 71,
  c: 50,
  java: 62,
  r: 80,
};

/* =========================
   ✅ MAIN ROUTE
========================= */
router.post("/", async (req, res) => {
  const { code, language } = req.body;

  const lang = language?.toLowerCase();
  console.log("Language:", lang);

  // ❌ Invalid language
  if (!languageMap[lang]) {
    return res.status(400).json({
      output: "Language not supported ❌",
    });
  }

  /* =========================
     🔵 Judge0 Execution
  ========================= */
  try {
    const response = await axios.post(
      "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
      {
        source_code: code,
        language_id: languageMap[lang],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data;

    res.json({
      output:
        result.stdout ||
        result.stderr ||
        result.compile_output ||
        result.message ||
        "No output",
    });
  } catch (error) {
    console.error("Judge0 error:", error.message);

    res.status(500).json({
      output: "Error running code ❌",
    });
  }
});

/* =========================
   ✅ EXPORT
========================= */
module.exports = router;