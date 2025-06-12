import React, { useEffect, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listReviews } from "../../graphql/queries";
import { deleteReview } from "../../graphql/mutations";
import styles from "./UserReviews.module.css";

export function UserReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const response = await API.graphql(
          graphqlOperation(listReviews, {
            filter: { userID: { eq: authUser.username } },
          })
        );

        setReviews(response.data.listReviews.items);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  async function handleDeleteReview(id) {
    try {
      await API.graphql(graphqlOperation(deleteReview, { input: { id } }));
      setReviews(reviews.filter((review) => review.id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
      setError("Failed to delete review.");
    }
  }

  if (loading) return <p className={styles.loading}>Loading reviews...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.reviewsPage}>
      <h2>Your Reviews</h2>
      {reviews.length === 0 ? (
        <p className={styles.noReviews}>No reviews submitted yet.</p>
      ) : (
        <ul className={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              <span>{review.business?.name || "Unknown Business"} - ⭐ {review.rating}</span>
              <p>{review.content}</p>
              <button onClick={() => handleDeleteReview(review.id)} className="btn-secondary">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
