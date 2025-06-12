import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getBusiness } from "../graphql/queries";
import { createReview } from "../graphql/mutations";
import { BusinessReview } from "../components/Business/BusinessReview";
import styles from "./ReviewPage.module.css";

export default function ReviewPage() {
  const { businessID } = useParams();
  const [business, setBusiness] = useState(null);
  const [reviewContent, setReviewContent] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await API.graphql(graphqlOperation(getBusiness, { id: businessID }));
        if (response.data.getBusiness) {
          setBusiness(response.data.getBusiness);
        } else {
          setError("Business not found.");
        }
      } catch (error) {
        console.error("Error fetching business:", error);
        setError("Failed to load business details.");
      } finally {
        setLoading(false);
      }
    }
    fetchBusiness();
  }, [businessID]);

  async function handleReviewSubmit(e) {
    e.preventDefault();
    try {
      const authUser = await Auth.currentAuthenticatedUser();

      await API.graphql(
        graphqlOperation(createReview, {
          input: {
            businessID,
            content: reviewContent,
            rating,
            userID: authUser.username, // Associate review with user
          },
        })
      );

      setReviewContent("");
      setRating(5);
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Failed to submit review.");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.reviewPage}>
      <h1>Reviews for {business.name}</h1>
      <BusinessReview businessId={businessID} />

      <form className={styles.reviewForm} onSubmit={handleReviewSubmit}>
        <h3>Write a Review</h3>
        <textarea
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          placeholder="Write your review here..."
          required
        />
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <button type="submit" className="btn-primary">Submit Review</button>
      </form>
    </div>
  );
}
