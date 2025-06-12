import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listReviews } from "../graphql/queries";
import { createReview } from "../graphql/mutations";

export function useReview(businessId) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const { data } = await API.graphql(
          graphqlOperation(listReviews, { filter: { businessID: { eq: businessId } } })
        );
        setReviews(data.listReviews.items);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    }
    if (businessId) fetchReviews();
  }, [businessId]);

  async function submitReview(reviewData) {
    try {
      const { data } = await API.graphql(graphqlOperation(createReview, { input: reviewData }));
      setReviews([...reviews, data.createReview]);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  }

  return { reviews, loading, submitReview };
}
