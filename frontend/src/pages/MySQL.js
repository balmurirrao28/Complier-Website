export default function MySQLTheoryPage() {
  return (
    <div style={styles.container}>
      <h1>MySQL 🗄️</h1>

      {/* INTRODUCTION */}
      <h2>Introduction</h2>
      <p>
        MySQL is an open-source relational database management system (RDBMS).
        It is widely used for web applications, enterprise systems, and data storage
        solutions. MySQL provides a structured way to store, query, and manipulate
        data using SQL.
      </p>

      {/* FUNCTIONS */}
      <h2>1. Functions in MySQL</h2>
      <p>MySQL provides many built-in functions:</p>

      <ul>
        <li><b>String functions</b> → CONCAT(), LENGTH()</li>
        <li><b>Numeric functions</b> → ROUND(), ABS()</li>
        <li><b>Date/Time functions</b> → NOW(), CURDATE()</li>
        <li><b>Aggregate functions</b> → SUM(), AVG(), COUNT()</li>
      </ul>

      <p>
        MySQL also supports user-defined functions using stored routines.
      </p>

      {/* DATA TYPES */}
      <h2>2. Data Types in MySQL</h2>

      <ul>
        <li><b>Numeric</b> → INT, BIGINT, DECIMAL, FLOAT, DOUBLE</li>
        <li><b>String</b> → CHAR, VARCHAR, TEXT</li>
        <li><b>Date/Time</b> → DATE, DATETIME, TIMESTAMP</li>
        <li><b>Boolean</b> → TINYINT(1)</li>
      </ul>

      <pre style={styles.code}>
{`CREATE TABLE Students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  dob DATE
);`}
      </pre>

      {/* LIBRARIES */}
      <h2>3. Libraries / Connectors</h2>
      <p>
        MySQL itself is a database engine, but client libraries allow integration
        with programming languages:
      </p>

      <ul>
        <li><b>Connector/J</b> → Java integration</li>
        <li><b>Connector/Python</b> → Python integration</li>
        <li><b>Connector/ODBC</b> → general connectivity</li>
      </ul>

      {/* STATEMENTS */}
      <h2>4. Statements in MySQL</h2>

      <ul>
        <li><b>DDL</b> → CREATE, ALTER, DROP</li>
        <li><b>DML</b> → INSERT, UPDATE, DELETE</li>
        <li><b>DQL</b> → SELECT</li>
        <li><b>TCL</b> → COMMIT, ROLLBACK</li>
      </ul>

      <pre style={styles.code}>
{`SELECT name FROM Students WHERE age > 20;`}
      </pre>

      {/* INTEGRATION */}
      <h2>5. Integration Workflow</h2>
      <ul>
        <li>Define schema using DDL</li>
        <li>Insert data using DML</li>
        <li>Query data using DQL</li>
        <li>Use functions for calculations</li>
      </ul>

      {/* ADVANTAGES */}
      <h2>6. Advantages</h2>
      <ul>
        <li>Open source and widely supported</li>
        <li>Fast and reliable</li>
        <li>Integrates with many programming languages</li>
      </ul>

    </div>
  );
}

// ✅ STYLES (NO ERRORS)
const styles = {
  container: {
    padding: "25px",
    maxWidth: "900px",
    margin: "auto",
  },
  code: {
    background: "#1e1e1e",
    color: "#00ffcc",
    padding: "10px",
    borderRadius: "8px",
  },
};