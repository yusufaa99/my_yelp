import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getReview } from "../graphql/queries";
import { updateReview } from "../graphql/mutations";
import styles from "./EditReviewPage.module.css";

export default function EditReviewPage() {
  const { reviewID } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({ content: "", rating: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await API.graphql(graphqlOperation(getReview, { id: reviewID }));
        if (response.data.getReview) {
          setReview(response.data.getReview);
        } else {
          setError("Review not found.");
        }
      } catch (error) {
        console.error("Error fetching review:", error);
        setError("Failed to load review.");
      } finally {
        setLoading(false);
      }
    }
    fetchReview();
  }, [reviewID]);

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      await API.graphql(graphqlOperation(updateReview, { input: { id: reviewID, ...review } }));
      alert("Review updated successfully!");
      navigate(`/review/${reviewID}`);
    } catch (error) {
      console.error("Error updating review:", error);
      setError("Failed to update review.");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.editReviewPage}>
      <h1>Edit Your Review</h1>
      <form className={styles.editReviewForm} onSubmit={handleUpdate}>
        <textarea
          value={review.content}
          onChange={(e) => setReview({ ...review, content: e.target.value })}
          placeholder="Update your review..."
          required
        />
        <label>Rating:</label>
        <select value={review.rating} onChange={(e) => setReview({ ...review, rating: Number(e.target.value) })}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <button type="submit" className="btn-primary">Save Changes</button>
      </form>
    </div>
  );
}
