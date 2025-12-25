import React, { useState, useEffect } from "react";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedUser");
    if (savedUser) setUsername(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setUsername("");
  };

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h1>My App</h1>

        <div>
          {!username ? (
            <>
              <button onClick={() => setShowLogin(true)}>Login</button>
              <button onClick={() => setShowSignup(true)}>Sign Up</button>
            </>
          ) : (
            <>
              <span style={{ marginRight: "20px" }}>
                Welcome, <b>{username}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </header>

      {showLogin && (
        <Login close={() => setShowLogin(false)} setUser={setUsername} />
      )}
      {showSignup && (
        <Signup close={() => setShowSignup(false)} setUser={setUsername} />
      )}
    </div>
  );
}
