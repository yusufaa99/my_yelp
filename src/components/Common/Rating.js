import React from "react";
import { ItemRating } from "./ItemRating";
import styles from "./Rating.module.css";

export function Rating({ rating }) {
  const displayRating = rating ? rating.toFixed(1) : "N/A";

  return (
    <div className={styles.ratingWrapper}>
      <ItemRating rating={rating} />
      <span className={styles.ratingText}>{displayRating}</span>
    </div>
  );
}
