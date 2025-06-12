import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from "./ItemRating.module.css";

export function ItemRating({ rating = 0 }) {
  const numericRating = Number(rating);
  const fullStars = Math.floor(numericRating);
  const hasHalfStar = numericRating % 1 !== 0 && numericRating < 5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.rating}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className={styles.star} />
      ))}
      {hasHalfStar && <FaStarHalfAlt className={styles.star} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className={styles.star} />
      ))}
    </div>
  );
}
