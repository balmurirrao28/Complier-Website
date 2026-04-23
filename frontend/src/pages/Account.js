import { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export default function Account() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u?.displayName) {
        setName(u.displayName);
      }
    });
    return unsub;
  }, []);

  const saveName = async () => {
    if (!auth.currentUser) return;

    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    setEditing(false);
    alert("Profile updated ✅");
  };

  if (!user) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "20px" }}>My Account 👤</h2>

        {/* PROFILE NAME */}
        <div style={styles.field}>
          <strong>Name:</strong>
          {editing ? (
            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />
              <button onClick={saveName} style={styles.saveBtn}>
                Save
              </button>
            </>
          ) : (
            <>
              <span> {user.displayName || "Not set"}</span>
              <button
                onClick={() => setEditing(true)}
                style={styles.editBtn}
              >
                Edit
              </button>
            </>
          )}
        </div>

        {/* EMAIL */}
        <div style={styles.field}>
          <strong>Email:</strong> {user.email}
        </div>

        {/* CREATED TIME */}
        <div style={styles.field}>
          <strong>Account Created:</strong>{" "}
          {new Date(user.metadata.creationTime).toLocaleString()}
        </div>

        {/* LAST LOGIN */}
        <div style={styles.field}>
          <strong>Last Login:</strong>{" "}
          {new Date(user.metadata.lastSignInTime).toLocaleString()}
        </div>

        {/* USER ID */}
        <div style={styles.field}>
          <strong>User ID:</strong> {user.uid}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#f1f5f9",
    minHeight: "100vh",
  },
  card: {
    maxWidth: "500px",
    margin: "auto",
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  field: {
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  editBtn: {
    marginLeft: "10px",
    padding: "4px 8px",
    background: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  saveBtn: {
    marginLeft: "10px",
    padding: "4px 8px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};