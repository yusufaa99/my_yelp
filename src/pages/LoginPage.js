import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ Import Link
import { Auth } from "aws-amplify";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const user = await Auth.signIn(email, password);
      console.log("User logged in:", user);
      navigate("/profile");
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "UserNotConfirmedException") {
        await Auth.resendSignUp(email);
        navigate(`/confirm-signup?email=${email}`);
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginPage}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* ✅ Forgot Password Link */}
        <div className={styles.forgotPassword}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
