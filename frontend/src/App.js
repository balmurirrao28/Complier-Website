const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Login />;
};
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Home from "./pages/Home";
import Python from "./pages/Python";
import C from "./pages/C";
import Java from "./pages/Java";
import RProgrammingPage from "./pages/R";
import MySQLTheoryPage from "./pages/MySQL";
import Compiler from "./pages/Compiler";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Signup from "./pages/Signup";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function AppLayout() {
  const location = useLocation();

  // Sidebar toggle
  const [showSidebar, setShowSidebar] = useState(true);

  // Firebase user state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hide sidebar on login
  const hideSidebar = location.pathname === "/login";

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Backend connection test
  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then(res => res.json())
      .then(data => console.log("Backend says:", data))
      .catch(err => console.error("Error:", err));
  }, []);

  // Loading screen
  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading...
      </h2>
    );
  }

  return (
    <>
      <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />

      <div
        style={{
          display: "flex",
          minHeight: hideSidebar ? "auto" : "calc(100vh - 56px)",
        }}
      >
        {/* Sidebar */}
        {!hideSidebar && showSidebar && <Sidebar />}

        {/* Main content */}
        <div
          style={{
            padding: hideSidebar ? 0 : "20px",
            width: "100%",
          }}
        >
          <Routes>
            {/* Default */}
            <Route path="/" element={user ? <Home /> : <Login />} />

            {/* Public */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected */}
            <Route path="/home" element={user ? <Home /> : <Login />} />
            <Route
  path="/compiler"
  element={
    <ProtectedRoute user={user}>
      <Compiler />
    </ProtectedRoute>
  }
/>
            <Route path="/python" element={user ? <Python /> : <Login />} />
            <Route path="/c" element={user ? <C /> : <Login />} />
            <Route path="/java" element={user ? <Java /> : <Login />} />
            <Route path="/r" element={user ? <RProgrammingPage /> : <Login />} />
            <Route path="/mysql" element={user ? <MySQLTheoryPage /> : <Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;