import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getBusiness } from "../graphql/queries";
import { BusinessHeader } from "../components/Business/BusinessHeader";
import { BusinessReview } from "../components/Business/BusinessReview";
import { BusinessReservation } from "../components/Business/BusinessReservation";
import styles from "./BusinessPage.module.css";

export default function BusinessPage() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    async function fetchBusiness() {
      setLoading(true);
      setError(null);

      try {
        const response = await API.graphql({
          query: getBusiness,
          variables: { id },
          authMode: "API_KEY", // ✅ Ensures public read access
        });

        console.log("Business fetched:", response);

        if (response.data.getBusiness) {
          setBusiness(response.data.getBusiness);
        } else {
          setError("Business not found.");
        }
      } catch (err) {
        console.error("Error fetching business:", err);

        if (err.errors && err.errors[0]?.errorType === "Unauthorized") {
          setError("You do not have permission to view this business.");
        } else {
          setError("Failed to load business details.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchBusiness();
  }, [id]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!business) return <p className={styles.error}>No business found.</p>;

  return (
    <div className={styles.businessPage}>
      <BusinessHeader business={business} />
      <BusinessReservation businessId={id} />
      <BusinessReview businessId={id} />
    </div>
  );
}
