import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.forgotPasswordSubmit(email, code, newPassword);
      setMessage("Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Reset Password</h2>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Reset Code:</label>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        <button type="submit" className="btn-primary">Reset Password</button>
      </form>
    </div>
  );
}
