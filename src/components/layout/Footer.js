import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} YelpClone. All Rights Reserved.</p>
      <nav className={styles.footerNav}>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <a href="https://github.com/Langtok" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
    </footer>
  );
}
