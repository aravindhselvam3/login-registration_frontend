// login_component.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Login() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Send a request to the backend to generate a reset token and send an email.
    // You can implement this part based on your backend logic.
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* Add a link to the password reset page */}
          <p className="forgot-password text-right">
            <Link to="/password-reset">Forgot Password</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
