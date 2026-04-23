import { Link } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = { color: "#1e293b", textDecoration: "none" };

  return (
    <div
      style={{
        width: "200px",
        background: "#f1f5f9",
        height: "100vh",
        padding: "15px",
      }}
    >
      <h3>Languages</h3>

      <ul>
        <li>
          <Link to="/python" style={linkStyle}>
            Python
          </Link>
        </li>
        <li>
          <Link to="/c" style={linkStyle}>
            C
          </Link>
        </li>
        <li>
          <Link to="/java" style={linkStyle}>
            Java
          </Link>
        </li>
        <li>
          <Link to="/r" style={linkStyle}>
            R
          </Link>
        </li>
        <li>
          <Link to="/mysql" style={linkStyle}>
            MySQL
          </Link>
        </li>
        <li>
          <Link to="/compiler" style={linkStyle}>
            Compiler
          </Link>
        </li>
      </ul>
    </div>
  );
}
