import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import styles from "./SignupPage.module.css";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Format phone number for AWS Cognito (e.g., "+1234567890")
  function formatPhoneNumber(phone) {
    let cleaned = phone.replace(/\D/g, ""); // Remove non-numeric characters
    if (!cleaned.startsWith("+")) {
      cleaned = "+1" + cleaned; // Default to US (+1) if no country code
    }
    return cleaned;
  }

  function isPasswordValid(password) {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) && // At least one uppercase letter
      /[a-z]/.test(password) && // At least one lowercase letter
      /\d/.test(password) && // At least one number
      /[^A-Za-z0-9]/.test(password) // At least one special character
    );
  }

  async function handleSignup(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!isPasswordValid(password)) {
      setError("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);
    if (!/^\+\d{10,15}$/.test(formattedPhone)) {
      setError("Phone number must be in international format (e.g., +1234567890).");
      return;
    }

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
          email,
          phone_number: formattedPhone,
        },
      });
      setStep(2);
      setMessage("A confirmation code has been sent to your email.");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleConfirmSignup(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      setMessage("✅ Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.signupPage}>
      <h2>{step === 1 ? "Sign Up" : "Confirm Signup"}</h2>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}

      {step === 1 ? (
        <form className={styles.signupForm} onSubmit={handleSignup}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <small className={styles.phoneInfo}>
            <span role="img" aria-label="info">ℹ️</span> Phone number must be in international format:
            <ul>
              <li><span role="img" aria-label="check">✅</span> Must start with `+` (e.g., +1234567890)</li>
              <li><span role="img" aria-label="check">✅</span> 10-15 digits</li>
              <li><span role="img" aria-label="check">✅</span> No spaces or special characters (except `+`)</li>
            </ul>
          </small>

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <small className={styles.passwordInfo}>
            <span role="img" aria-label="info">ℹ️</span> Password must include:
            <ul>
              <li><span role="img" aria-label="check">✅</span> At least 8 characters</li>
              <li><span role="img" aria-label="check">✅</span> One uppercase letter (A-Z)</li>
              <li><span role="img" aria-label="check">✅</span> One lowercase letter (a-z)</li>
              <li><span role="img" aria-label="check">✅</span> One number (0-9)</li>
              <li><span role="img" aria-label="check">✅</span> One special character (@$!%*?&)</li>
            </ul>
          </small>

          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
      ) : (
        <form className={styles.signupForm} onSubmit={handleConfirmSignup}>
          <label>Confirmation Code:</label>
          <input
            type="text"
            placeholder="Enter the code sent to your email"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">Confirm</button>
        </form>
      )}
    </div>
  );
}
