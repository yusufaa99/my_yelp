import React, { useState, useEffect } from "react";
import { API, Auth } from "aws-amplify";
import { createReservation } from "../../graphql/mutations";
import styles from "./BusinessReservation.module.css";

export function BusinessReservation({ businessId }) {
  const [userId, setUserId] = useState(null);
  const [dateTime, setDateTime] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        setUserId(authUser.attributes.sub); // ✅ Get the user's ID from Cognito
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to authenticate user.");
      }
    }
    fetchUser();
  }, []);

  async function handleReservation(event) {
    event.preventDefault();
    setError(null);
    setMessage("");

    if (!userId || !businessId) {
      setError("User or business ID is missing.");
      return;
    }

    if (!dateTime) {
      setError("Please select a valid date and time.");
      return;
    }

    // ✅ Ensure dateTime is in ISO 8601 format (AWSDateTime expects this)
    const formattedDateTime = new Date(dateTime).toISOString();

    try {
      const input = {
        businessID: businessId,
        userID: userId,
        dateTime: formattedDateTime, // ✅ Convert to ISO format
        status: "Pending", // ✅ Directly assign "Pending" (no need for state)
      };

      console.log("Submitting reservation:", JSON.stringify(input, null, 2));

      const response = await API.graphql({
        query: createReservation,
        variables: { input },
        authMode: "AMAZON_COGNITO_USER_POOLS", // ✅ Using API Key authentication
      });

      console.log("Reservation created successfully:", response);

      if (response.data.createReservation) {
        setMessage("Reservation made successfully!");
      } else {
        setError("Failed to make reservation. No data returned.");
      }
    } catch (err) {
      console.error("Error making reservation:", err);
      setError("Failed to make reservation. Please try again.");
    }
  }

  return (
    <div className={styles.businessReservation}>
      <h2>Make a Reservation</h2>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleReservation}>
        <label>Date & Time:</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary" disabled={!userId || !businessId}>
          Reserve
        </button>
      </form>
    </div>
  );
}
