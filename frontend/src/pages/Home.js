import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>

      {/* HEADER */}
      <h1 style={styles.title}>Code Pro ⌨️</h1>
      <p style={styles.subtitle}>
        Learn programming and run code in multiple languages instantly.
      </p>

      {/* LANGUAGE CARDS */}
      <div style={styles.grid}>
        {[
          { name: "Python", path: "/python" },
          { name: "C Programming", path: "/c" },
          { name: "Java", path: "/java" },
          { name: "R", path: "/r" },
          { name: "MySQL", path: "/mysql" },
          { name: "Compiler", path: "/compiler" },
        ].map((item) => (
          <Link to={item.path} key={item.name} style={styles.card}>
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>

      {/* INFO SECTION */}
      <div style={styles.infoBox}>
        <h2>Why Code Pro?</h2>
        <div style={styles.features}>
          <div style={styles.feature}>⚡ Run code instantly</div>
          <div style={styles.feature}>🌍 Multiple languages</div>
          <div style={styles.feature}>💡 Easy to use</div>
          <div style={styles.feature}>🚀 Beginner friendly</div>
        </div>

        <Link to="/compiler">
          <button style={styles.button}>
            ▶ Start Coding
          </button>
        </Link>
      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#555",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },

  card: {
    background: "#1e293b",
    color: "white",
    padding: "25px",
    borderRadius: "10px",
    textDecoration: "none",
    transition: "0.2s",
  },

  infoBox: {
    background: "#f1f5f9",
    padding: "30px",
    borderRadius: "12px",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "15px",
  },

  feature: {
    background: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },

  button: {
    marginTop: "20px",
    padding: "12px 25px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};