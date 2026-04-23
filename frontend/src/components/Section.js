import { useState } from "react";

export default function Section({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.section}>
      <div style={styles.header} onClick={() => setOpen(!open)}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <span>{open ? "−" : "+"}</span>
      </div>

      {open && <div style={styles.content}>{children}</div>}
    </div>
  );
}

const styles = {
  section: {
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
  },
  header: {
    background: "#1e293b",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  content: {
    padding: "15px",
    background: "#f9fafb",
  },
};