import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";
import styles from "./ConfirmSignup.module.css";

export default function ConfirmSignup() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email") || ""; // ✅ Use email instead of username

  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  async function handleConfirm(event) {
    event.preventDefault();
    setError(null);
    setMessage("");

    try {
      await Auth.confirmSignUp(email, code);
      setMessage("Account confirmed successfully. Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleResendCode() {
    setError(null);
    setMessage("");

    try {
      await Auth.resendSignUp(email);
      setMessage("A new confirmation code has been sent to your email.");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.confirmContainer}>
      <h2>Confirm Your Account</h2>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
      
      <form className={styles.confirmForm} onSubmit={handleConfirm}>
        <label>Enter Confirmation Code:</label>
        <input
          type="text"
          placeholder="Enter the code sent to your email"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Confirm Account</button>
      </form>

      <button onClick={handleResendCode} className="btn-secondary">
        Resend Code
      </button>
    </div>
  );
}
