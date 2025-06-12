import React, { useEffect, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listFavorites } from "../../graphql/queries";
import { deleteFavorite } from "../../graphql/mutations";
import styles from "./UserFavorites.module.css";

export function UserFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const response = await API.graphql(
          graphqlOperation(listFavorites, {
            filter: { userID: { eq: authUser.username } },
          })
        );
        setFavorites(response.data.listFavorites.items);
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setError("Failed to load favorites.");
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, []);

  async function handleRemoveFavorite(id) {
    try {
      await API.graphql(graphqlOperation(deleteFavorite, { input: { id } }));
      setFavorites(favorites.filter((fav) => fav.id !== id));
    } catch (error) {
      console.error("Error removing favorite:", error);
      setError("Failed to remove favorite.");
    }
  }

  if (loading) return <p className={styles.loading}>Loading favorites...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.favoritesPage}>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className={styles.noFavorites}>No favorites yet.</p>
      ) : (
        <ul className={styles.favoriteList}>
          {favorites.map((fav) => (
            <li key={fav.id} className={styles.favoriteItem}>
              <span>{fav.business?.name || "Unknown Business"}</span>
              <button onClick={() => handleRemoveFavorite(fav.id)} className="btn-secondary">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
