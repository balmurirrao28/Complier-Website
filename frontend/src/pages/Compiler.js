import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const templates = {
  python: 'print("Hello World")',
  c: '#include <stdio.h>\nint main(){ printf("Hello"); return 0; }',
  java:
    'public class Main {\n public static void main(String[] args){\n  System.out.println("Hello");\n }\n}',
  r: 'print("Hello from R")',
  mysql: "SELECT 1 AS result;",
};

export default function Compiler() {
  const location = useLocation();

  const [code, setCode] = useState(templates.python);
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("python");

  /* =========================
     Load language from URL
  ========================= */
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("lang");

    if (lang && templates[lang]) {
      setLanguage(lang);
      setCode(templates[lang]);
    }
  }, [location]);

  /* =========================
     Run Code
  ========================= */
  const runCode = async () => {
    setOutput("Running...");

    try {
      const res = await axios.post(
        "https://complier-backend-lk9v.onrender.com/api/compiler",
        {
          code,
          language,
        }
      );

      console.log("API RESPONSE:", res.data);

      // ✅ Safe output handling
      if (res.data && res.data.output) {
        setOutput(res.data.output);
      } else {
        setOutput("No output (check your code)");
      }
    } catch (err) {
      console.error(err);
      setOutput("Error running code ❌");
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>Languages</h2>
        {Object.keys(templates).map((lang) => (
          <button
            key={lang}
            style={styles.langBtn}
            onClick={() => {
              setLanguage(lang);
              setCode(templates[lang]);
            }}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Editor */}
      <div style={styles.editor}>
        <h2>{language.toUpperCase()} Compiler</h2>

        <textarea
          style={styles.textarea}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button style={styles.runBtn} onClick={runCode}>
          ▶ Run Code
        </button>

        <div style={styles.output}>
          <h3>Output:</h3>
          <pre>{output ? output : "No output"}</pre>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Styles
========================= */
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#1e1e1e",
    color: "white",
  },
  sidebar: {
    width: "200px",
    background: "#111",
    padding: "20px",
    borderRight: "1px solid #333",
  },
  langBtn: {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    background: "#333",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  editor: {
    flex: 1,
    padding: "20px",
  },
  textarea: {
    width: "100%",
    height: "300px",
    background: "#1e1e1e",
    color: "#00ffcc",
    border: "1px solid #444",
    fontFamily: "monospace",
    fontSize: "16px",
    padding: "10px",
  },
  runBtn: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  output: {
    marginTop: "20px",
    background: "#000",
    padding: "10px",
    minHeight: "100px",
  },
};