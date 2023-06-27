import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1>Musculoskeletal Anatomy</h1>
      <h3>Please Log In</h3>
      {showLogin ? (
        <div>
          <LoginForm onLogin={onLogin} />
          <br />
          <p className="login">
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div>
          <SignUpForm onLogin={onLogin} />
          <br />
          <p className="login">
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;