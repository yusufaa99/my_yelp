import React from "react";
import { Rating } from "../Common/Rating";
import { HelpfulVote } from "./HelpfulVote";
import styles from "./ReviewCard.module.css";

export function ReviewCard({ review }) {
  return (
    <div className={styles.reviewCard}>
      <h3>{review.user?.name || "Anonymous"}</h3>
      <p className={styles.date}>{new Date(review.createdAt).toLocaleDateString()}</p>
      <Rating rating={review.rating} />
      <p className={styles.content}>{review.content}</p>
      <HelpfulVote reviewId={review.id} votes={review.helpfulVotes ?? 0} />
    </div>
  );
}
