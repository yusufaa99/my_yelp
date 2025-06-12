import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listReservations, getBusiness } from "../graphql/queries";
import { deleteReservation } from "../graphql/mutations";
import styles from "./ReservationsPage.module.css";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReservations() {
      setLoading(true);
      setError(null);

      try {
        // ✅ Get authenticated user's ID
        const authUser = await Auth.currentAuthenticatedUser();
        const userSub = authUser.attributes.sub;

        // ✅ Fetch user's reservations
        const response = await API.graphql({
          query: listReservations,
          variables: { filter: { userID: { eq: userSub } } },
          authMode: "AMAZON_COGNITO_USER_POOLS", // ✅ Ensure user authentication
        });

        let reservationsData = response.data?.listReservations?.items || [];

        // ✅ Fetch business details for each reservation with PUBLIC access
        const reservationsWithBusiness = await Promise.all(
          reservationsData.map(async (reservation) => {
            try {
              const businessResponse = await API.graphql({
                query: getBusiness,
                variables: { id: reservation.businessID },
                authMode: "API_KEY", // ✅ Ensure PUBLIC access to Business
              });

              return {
                ...reservation,
                business: businessResponse.data.getBusiness || { name: "Unknown Business" },
              };
            } catch (error) {
              console.error(`Error fetching business for reservation ${reservation.id}:`, error);
              return { ...reservation, business: { name: "Unknown Business" } };
            }
          })
        );

        setReservations(reservationsWithBusiness);
      } catch (err) {
        console.error("Error fetching reservations:", err);
        setError("Failed to load reservations.");
      } finally {
        setLoading(false);
      }
    }

    fetchReservations();
  }, []);

  // ✅ Handle Delete Reservation
  async function handleDelete(reservationId) {
    if (!window.confirm("Are you sure you want to delete this reservation?")) {
      return;
    }

    try {
      await API.graphql({
        query: deleteReservation,
        variables: { input: { id: reservationId } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      // ✅ Remove deleted reservation from state
      setReservations(reservations.filter((res) => res.id !== reservationId));
    } catch (err) {
      console.error("Error deleting reservation:", err);
      setError("Failed to delete reservation.");
    }
  }

  if (loading) return <p className={styles.loading}>Loading reservations...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.reservationsPage}>
      <h1>Your Reservations</h1>

      {reservations.length === 0 ? (
        <p className={styles.noReservations}>You have no reservations yet.</p>
      ) : (
        <ul className={styles.reservationList}>
          {reservations.map((reservation) => (
            <li key={reservation.id} className={styles.reservationItem}>
              <strong>Business:</strong> {reservation.business.name} <br />
              <strong>Date:</strong> {new Date(reservation.dateTime).toLocaleString()} <br />
              <strong>Status:</strong> {reservation.status}
              <br />
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(reservation.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
