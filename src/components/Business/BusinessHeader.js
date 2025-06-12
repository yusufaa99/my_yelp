import React from "react";
import styles from "./BusinessHeader.module.css";

export function BusinessHeader({ business }) {
  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `url(${business.imageUrl || "/assets/bg-1.jpg"})` }}
    >
      <div className={styles.overlay}>
        <h1>{business.name}</h1>
        <p>
          {business.category || "Category not specified"} | 
          <span role="img" aria-label="star">⭐</span> 
          {business.rating ?? "N/A"} ({business.reviewCount ?? 0} reviews)
        </p>
        <p>{business.location || "Location not available"}</p>
      </div>
    </div>
  );
}
