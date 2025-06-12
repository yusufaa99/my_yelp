import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getBusiness } from "../graphql/queries";
import { deleteBusiness } from "../graphql/mutations";
import styles from "./DeleteBusiness.module.css";

export default function DeleteBusiness() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();

        const response = await API.graphql(graphqlOperation(getBusiness, { id }));
        if (!response?.data?.getBusiness) {
          setError("Business not found.");
          return;
        }

        const businessData = response.data.getBusiness;
        if (businessData.owner !== authUser.attributes.sub) {
          setError("You are not authorized to delete this business.");
          return;
        }

        setBusiness(businessData);
      } catch (err) {
        console.error("Error fetching business:", err);
        setError("Failed to load business data.");
      } finally {
        setLoading(false);
      }
    }

    fetchBusiness();
  }, [id]);

  async function handleDelete() {
    try {
      await API.graphql(graphqlOperation(deleteBusiness, { input: { id } }));
      setError(null);
      navigate("/"); // Redirect to home after deletion
    } catch (err) {
      console.error("Error deleting business:", err);
      setError("Failed to delete business. Please try again.");
    }
  }

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.deleteBusinessPage}>
      <h1>Delete Business</h1>
      <p>Are you sure you want to delete <strong>{business?.name}</strong>?</p>
      <button className="btn-danger" onClick={handleDelete}>Delete Business</button>
      <button className="btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
}
