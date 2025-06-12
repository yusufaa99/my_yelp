import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { createBusiness } from "../graphql/mutations";
import styles from "./AddBusinessPage.module.css";

export default function AddBusinessPage() {
  const [business, setBusiness] = useState({
    name: "",
    category: "",
    address: "",
    phoneNumber: "",
    website: "",
    rating: "",
    region: "",
    location: "",
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setMessage("");

    console.log("Business Data Before Submission:", business);

    if (!business.region.trim()) {
      setError("Region is required.");
      console.error("Error: Region is missing.");
      return;
    }

    if (!business.location.trim()) {
      setError("Location is required.");
      console.error("Error: Location is missing.");
      return;
    }

    try {
      const input = {
        name: business.name,
        category: business.category,
        address: business.address,
        phoneNumber: business.phoneNumber || null,
        website: business.website || null,
        rating: parseFloat(business.rating) || 0,
        region: business.region.trim(),
        location: business.location.trim(),
      };

      console.log("Submitting business:", JSON.stringify(input, null, 2));

      const response = await API.graphql(graphqlOperation(createBusiness, { input }));
      console.log("Business created successfully:", response);

      if (response.data.createBusiness) {
        setMessage("Business added successfully!");
        setTimeout(() => navigate(`/business/${response.data.createBusiness.id}`), 2000);
      } else {
        setError("Failed to add business. No data returned.");
      }
    } catch (err) {
      console.error("Error adding business:", err);
      setError("Failed to add business. Please try again.");
    }
  }

  return (
    <div className={styles.addBusinessPage}>
      <h1>Add Business</h1>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form className={styles.businessForm} onSubmit={handleSubmit}>
        <label>Business Name:</label>
        <input
          type="text"
          placeholder="Enter business name"
          value={business.name}
          onChange={(e) => setBusiness({ ...business, name: e.target.value })}
          required
        />

        <label>Category:</label>
        <input
          type="text"
          placeholder="Enter category"
          value={business.category}
          onChange={(e) => setBusiness({ ...business, category: e.target.value })}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          placeholder="Enter address"
          value={business.address}
          onChange={(e) => setBusiness({ ...business, address: e.target.value })}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={business.phoneNumber}
          onChange={(e) => setBusiness({ ...business, phoneNumber: e.target.value })}
        />

        <label>Website:</label>
        <input
          type="url"
          placeholder="Enter website URL"
          value={business.website}
          onChange={(e) => setBusiness({ ...business, website: e.target.value })}
        />

        <label>Rating (1-5):</label>
        <input
          type="number"
          placeholder="Enter rating"
          value={business.rating}
          onChange={(e) => setBusiness({ ...business, rating: e.target.value })}
          min="1"
          max="5"
          step="0.1"
        />

        <label>Region:</label>
        <input
          type="text"
          placeholder="Enter region"
          value={business.region || ""}
          onChange={(e) => setBusiness({ ...business, region: e.target.value })}
          required
        />

        <label>Location:</label>
        <input
          type="text"
          placeholder="Enter location"
          value={business.location || ""}
          onChange={(e) => setBusiness({ ...business, location: e.target.value })}
          required
        />

        <button type="submit" className="btn-primary">Add Business</button>
      </form>
    </div>
  );
}
