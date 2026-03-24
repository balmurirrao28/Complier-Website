const express = require("express");
const axios = require("axios");
const mysql = require("mysql2");

const router = express.Router();

// ✅ DB
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed ❌", err);
  } else {
    console.log("MySQL connected ✅");
  }
});

// ✅ ADD THIS (YOU MISSED THIS)
const languageMap = {
  python: 71,
  c: 50,
  java: 62,
  r: 80,
  mysql: "mysql",
};
router.post("/", async (req, res) => {
  const { code } = req.body;
  const language = req.body.language?.toLowerCase();

  console.log("Language received:", language);

  if (!languageMap[language]) {
    return res.status(400).json({
      output: "Language not supported",
    });
  }

  if (language === "mysql") {
  db.query(code, (err, result) => {
    if (err) {
      console.error("MySQL error:", err);
      return res.json({ output: err.message });
    }

    // ✅ HANDLE EMPTY + FORMAT OUTPUT
    if (!result || result.length === 0) {
      return res.json({
        output: "Query executed successfully",
      });
    }

    return res.json({
      output: JSON.stringify(result, null, 2),
    });
  });
  return;
}

  // ✅ OTHER LANGUAGES
  try {
    const response = await axios.post(
      "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
      {
        source_code: code,
        language_id: languageMap[language],
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
      output: "Error running code",
    });
  }
});
module.exports = router;