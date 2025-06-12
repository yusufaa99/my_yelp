import React from "react";
import styles from "./BusinessDetails.module.css";

export function BusinessDetails({ business }) {
  return (
    <div className={styles.businessDetails}>
      <img 
        src={business.imageUrl || "/assets/logo.png"} 
        alt={business.name} 
        className={styles.image}
        onError={(e) => { e.target.src = "/assets/logo.png"; }} // ✅ Fallback for broken images
      />
      <div className={styles.info}>
        <h1>{business.name}</h1>
        <p><strong>Address:</strong> {business.address || "Not available"}</p>
        <p><strong>Phone:</strong> {business.phone || "Not available"}</p>
        <p><strong>Category:</strong> {business.category || "Not specified"}</p>
        <p>⭐ {business.rating ?? "N/A"} ({business.reviewCount ?? 0} reviews)</p>
      </div>
    </div>
  );
}
