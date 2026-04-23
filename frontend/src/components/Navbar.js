import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: "6px",
  };

  const activeStyle = {
    background: "#22c55e",
    color: "black",
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return unsub;
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav style={{
      background: "#1e293b",
      padding: "15px 30px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      {/* LEFT */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          background: "#22c55e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "black"
        }}>
          CP
        </div>

        <h2 style={{ margin: 0 }}>Code Pro</h2>

        <button onClick={toggleSidebar} style={{
          marginLeft: "10px",
          padding: "5px 10px",
          borderRadius: "5px",
          border: "none",
          background: "#22c55e",
          color: "black",
          cursor: "pointer"
        }}>
          ☰
        </button>
      </div>

      {/* RIGHT */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>

        <NavLink
          to="/home"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/compiler"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Compiler
        </NavLink>

        {user && (
          <NavLink
            to="/account"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            My Account
          </NavLink>
        )}

        {user && (
          <button
            onClick={handleLogout}
            style={{
              padding: "6px 12px",
              background: "#ef4444",
              border: "none",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
}