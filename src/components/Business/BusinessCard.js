import React from "react";
import { Link } from "react-router-dom";
import { Storage } from "aws-amplify"; // ✅ Import AWS Storage
import styles from "./BusinessCard.module.css";

export function BusinessCard({ business }) {
  // ✅ Generate full S3 URL for images
  const getImageUrl = () => {
    if (business.imageUrl) {
      return business.imageUrl.startsWith("http")
        ? business.imageUrl // If it's already a full URL, use it
        : Storage.get(business.imageUrl, { level: "public" }); // Fetch from S3
    }
    return "/assets/images/logo.png"; // ✅ Use public folder image for fallback
  };

  return (
    <div className={styles.businessCard}>
      <img 
        src={getImageUrl()}
        alt={business.name} 
        className={styles.image} 
        onError={(e) => { e.target.src = "/assets/images/logo.png"; }} // ✅ Fix broken images
      />
      <div className={styles.info}>
        <h3>{business.name}</h3>
        <p>{business.address || "No address provided"}</p>
        <p>
          <span role="img" aria-label="star">⭐</span> {business.rating ?? "N/A"} ({business.reviewCount ?? 0} reviews)
        </p>
        <Link to={`/business/${business.id}`} className="btn-primary">View Details</Link>
      </div>
    </div>
  );
}
