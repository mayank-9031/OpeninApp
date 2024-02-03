import React, { useState } from "react";
import "./SignIn.css";
import logo from "./logo.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="signin-wrapper">
      <div className="background-shape"></div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />{" "}
      </div>
      <div className="base-text">BASE</div>
      <div className="signin-container">
        <div className="signin-box">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <div className="signin-footer">
            <a href="/forgot-password">Forgot password?</a>
            <a href="/register">Register here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
