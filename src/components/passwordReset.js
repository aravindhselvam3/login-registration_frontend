// PasswordReset.js
import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

export default function PasswordReset() {
  const { token } = useParams(); // Extract the token from the URL

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = () => {
    // Send a request to the backend to reset the password using the token.
    // Implement this part based on your backend logic.
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Reset Password</h3>

          <div className="mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="button" onClick={handleResetPassword} className="btn btn-primary">
              Reset Password
            </button>
          </div>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
