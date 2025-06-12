import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import logo from "../../assets/images/logo.png"; // ✅ Import your logo
import styles from "./Navigation.module.css";

export function Navigation() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        setUser(authUser);
      } catch {
        setUser(null);
      }
    }

    checkUser();

    // Listen for auth state changes
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      if (payload.event === "signIn" || payload.event === "signOut") {
        checkUser();
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleSignOut() {
    try {
      await Auth.signOut();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <nav>
      <Link to="/">
        <img src={logo} alt="YelpClone Logo" style={{ height: "40px" }} />
      </Link>
    </nav>
      </div>

      {/* Mobile Menu Toggle */}
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <Link to="/favorites">Favorites</Link>
        <Link to="/reservations">Reservations</Link>
        {user && <Link to="/profile">Profile</Link>}

        {/* Businesses Dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setBusinessDropdown(true)}
          onMouseLeave={() => setBusinessDropdown(false)}
        >
          <button className={styles.dropdownBtn}>Businesses ▼</button>
          {businessDropdown && (
            <div className={styles.dropdownContent}>
              <Link to="/add-business">Add Business</Link>
              <br></br>
              <Link to="/businesses">View Business</Link>
            </div>
          )}
        </div>
      </div>

      <div className={styles.authButtons}>
        {user ? (
          <button className={styles.logoutBtn} onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <>
            <button className={styles.loginBtn} onClick={() => navigate("/login")}>
              Login
            </button>
            <button className={styles.signupBtn} onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
