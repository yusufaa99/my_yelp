import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getBusiness } from "../../graphql/queries";
import { updateBusiness } from "../../graphql/mutations";
import styles from "./EditBusiness.module.css";

export default function EditBusiness() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [business, setBusiness] = useState({
    name: "",
    category: "",
    address: "",
    location: "",
    phoneNumber: "",
    website: "",
    rating: "",
    region: "",
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBusiness() {
      setLoading(true);
      setError(null);

      try {
        const response = await API.graphql({
          query: getBusiness,
          authMode: "API_KEY", // ✅ Uses signed-in user authentication
          variables: { id }
        });

        if (!response?.data?.getBusiness) {
          setError("Business not found.");
          return;
        }

        const businessData = response.data.getBusiness;
        setBusiness({
          name: businessData.name,
          category: businessData.category,
          address: businessData.address,
          location: businessData.location || "Location not provided",
          phoneNumber: businessData.phoneNumber || "",
          website: businessData.website || "",
          rating: businessData.rating || "",
          region: businessData.region || "",
        });
      } catch (err) {
        console.error("Error fetching business:", err);
        setError("Failed to load business data. You might not have permission.");
      } finally {
        setLoading(false);
      }
    }

    fetchBusiness();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setMessage("");

    try {
      const input = {
        id,
        name: business.name,
        category: business.category,
        address: business.address,
        location: business.location,
        phoneNumber: business.phoneNumber || null,
        website: business.website || null,
        rating: parseFloat(business.rating) || 0,
        region: business.region,
      };

      console.log("Updating business:", JSON.stringify(input, null, 2));

      await API.graphql({
        query: updateBusiness,
        authMode: "AMAZON_COGNITO_USER_POOLS", // ✅ Ensure only signed-in users can update
        variables: { input }
      });

      setMessage("Business updated successfully!");
      setTimeout(() => navigate(`/business/${id}`), 2000);
    } catch (err) {
      console.error("Error updating business:", err);
      setError("Failed to update business. Please try again.");
    }
  }

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.editBusinessPage}>
      <h1>Edit Business</h1>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form className={styles.businessForm} onSubmit={handleSubmit}>
        <label>Business Name:</label>
        <input
          type="text"
          value={business.name}
          onChange={(e) => setBusiness({ ...business, name: e.target.value })}
          required
        />

        <label>Category:</label>
        <input
          type="text"
          value={business.category}
          onChange={(e) => setBusiness({ ...business, category: e.target.value })}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          value={business.address}
          onChange={(e) => setBusiness({ ...business, address: e.target.value })}
          required
        />

        <label>Location:</label>
        <input
          type="text"
          value={business.location}
          onChange={(e) => setBusiness({ ...business, location: e.target.value })}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          value={business.phoneNumber}
          onChange={(e) => setBusiness({ ...business, phoneNumber: e.target.value })}
        />

        <label>Website:</label>
        <input
          type="url"
          value={business.website}
          onChange={(e) => setBusiness({ ...business, website: e.target.value })}
        />

        <label>Rating (1-5):</label>
        <input
          type="number"
          value={business.rating}
          onChange={(e) => setBusiness({ ...business, rating: e.target.value })}
          min="1"
          max="5"
          step="0.1"
        />

        <label>Region:</label>
        <input
          type="text"
          value={business.region}
          onChange={(e) => setBusiness({ ...business, region: e.target.value })}
          required
        />

        <button type="submit" className="btn-primary">Update Business</button>
      </form>
    </div>
  );
}
