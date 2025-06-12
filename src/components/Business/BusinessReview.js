import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listReviews } from "../../graphql/queries";
import { ReviewCard } from "../Reviews/ReviewCard";
import styles from "./BusinessReview.module.css";

export function BusinessReview({ businessId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      setError(null);

      try {
        const response = await API.graphql({
          query: listReviews,
          variables: { filter: { businessID: { eq: businessId } } },
          authMode: "API_KEY", // ✅ Ensure public access to read reviews
        });

        console.log("Fetched Reviews:", response);

        if (response.data.listReviews?.items?.length > 0) {
          setReviews(response.data.listReviews.items);
        } else {
          setError("No reviews found.");
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);

        if (err.errors && err.errors[0]?.errorType === "Unauthorized") {
          setError("You do not have permission to view reviews.");
        } else {
          setError("Failed to load reviews.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [businessId]);

  if (loading) return <p className={styles.loading}>Loading reviews...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.businessReview}>
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className={styles.noReviews}>No reviews yet.</p>
      ) : (
        reviews.map((review) => <ReviewCard key={review.id} review={review} />)
      )}
    </div>
  );
}
