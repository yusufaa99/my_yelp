import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "../Common/Rating";
import styles from "./SearchResult.module.css";

export function SearchResult({ business }) {
  return (
    <div className={styles.searchResult}>
      <img
        src={business.imageUrl || "/assets/logo.png"}
        alt={business.name}
        className={styles.image}
        onError={(e) => { e.target.src = "/assets/logo.png"; }} // ✅ Fallback for broken images
      />
      <div className={styles.info}>
        <h3>{business.name}</h3>
        <p>{business.address || "No address provided"}</p>
        <Rating rating={business.rating ?? "N/A"} />
        <Link to={`/business/${business.id}`} className="btn-secondary">View Details</Link>
      </div>
    </div>
  );
}
