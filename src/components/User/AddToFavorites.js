import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createFavorite } from "../../graphql/mutations";
import { listFavorites } from "../../graphql/queries";
import styles from "./AddToFavorites.module.css";

export function AddToFavorites({ businessId }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkFavorite() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const response = await API.graphql(
          graphqlOperation(listFavorites, {
            filter: {
              userID: { eq: authUser.username },
              businessID: { eq: businessId },
            },
          })
        );

        if (response.data.listFavorites.items.length > 0) {
          setIsFavorite(true);
        }
      } catch (error) {
        console.error("Error checking favorite:", error);
      }
    }

    checkFavorite();
  }, [businessId]);

  async function handleAddFavorite() {
    if (isFavorite) return;

    setLoading(true);
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      await API.graphql(
        graphqlOperation(createFavorite, {
          input: { userID: authUser.username, businessID: businessId },
        })
      );

      setIsFavorite(true);
      alert("Added to favorites!");
    } catch (error) {
      console.error("Error adding to favorites:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddFavorite}
      className={styles.addToFavorites}
      disabled={isFavorite || loading}
    >
      {isFavorite ? "Added to Favorites ✔" : "Add to Favorites"}
    </button>
  );
}
