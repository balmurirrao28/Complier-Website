import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 AUTO REDIRECT IF LOGGED IN
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ✅ KEEP USER LOGGED IN
      await setPersistence(auth, browserLocalPersistence);

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/home");
    } catch (err) {
      console.log("🔥 ERROR CODE:", err.code);

      if (err.code === "auth/user-not-found") {
        setError("User not found. Please sign up.");
      } else if (err.code === "auth/wrong-password") {
        setError("Wrong password");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format");
      } else if (err.code === "auth/invalid-credential") {
        setError("Invalid credentials");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const handleResetPassword = async () => {
  if (!email) {
    setError("Enter your email first");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent ✅");
  } catch (err) {
    setError("Failed to send reset email");
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login to Code Pro</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
        <p
  onClick={handleResetPassword}
  style={{
    marginTop: "10px",
    color: "#3b82f6",
    cursor: "pointer",
    textAlign: "center"
  }}
>
  Forgot Password?
</p>

        {/* 🔥 ADD THIS */}
        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ color: "#22c55e", cursor: "pointer", fontWeight: "bold" }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f1f5f9",
  },
  card: {
    width: "350px",
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#22c55e",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};
